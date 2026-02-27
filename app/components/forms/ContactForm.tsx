"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const schema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter valid email"),
  phone: z.string().min(10, "Phone number required"),
  inquiryType: z.string().min(1, "Select inquiry type"),
  message: z.string().min(1, "Message required"),
});
const FieldLabel = ({ text }: { text: string }) => (
  <label className="block text-sm font-medium text-gray-700 mb-2">
    {text} <span className="text-red-500">*</span>
  </label>
);
export type ContactFormData = z.infer<typeof schema>;

interface ContactFormProps {
  inquiryOptions: string[];
  apiEndpoint: string;
  pageName: string;
}

export default function ContactForm({
  inquiryOptions,
  apiEndpoint,
  pageName,
}: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  // UTM logic
  const getUtmSource = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("utm_source") || "Direct";
  };

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);

    const payload = {
      ...data,
      page: pageName,
      utm_url: window.location.href,
      utm_source: getUtmSource(),
      submitted_at: new Date(),
    };

    try {
      await axios.post(apiEndpoint, payload);
      router.push("/thankyou");
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
      {/* Name */}
      <div className="mb-3.5">
         <FieldLabel text="Full Name" />
        <input
          {...register("full_name")}
          placeholder="Enter full Name"
          className={`w-full rounded-lg px-4 py-3 border transition-all duration-200
    focus:outline-none focus:border-[#1c4584] focus:ring-2 focus:ring-[#1c4584]/20 ${
            errors.full_name ? "border-2 border-red-500" : "border-gray-300"
          }`}
        />
      </div>

      {/* Email */}
      <div  className="mb-3.5">
         <FieldLabel text="Email ID" />
        <input
          {...register("email")}
          placeholder="Your Email"
          className={`w-full rounded-lg px-4 py-3 border transition-all duration-200
    focus:outline-none focus:border-[#1c4584] focus:ring-2 focus:ring-[#1c4584]/20 ${
            errors.email ? "border-2 border-red-500" : "border-gray-300"
          }`}
        />
      </div>

      {/* Phone */}
      <div  className="mb-3.5">
          <FieldLabel text="Phone" />

        <input
          {...register("phone")}
          placeholder="Phone Number"
          className={`w-full rounded-lg px-4 py-3 border transition-all duration-200
    focus:outline-none focus:border-[#1c4584] focus:ring-2 focus:ring-[#1c4584]/20 ${
            errors.phone ? "border-2 border-red-500" : "border-gray-300"
          }`}
        />
      </div>

      {/* Dropdown */}
      <div className="relative mb-3.5">
        <FieldLabel text="Inquiry Type" />

        {/* Hidden input for react-hook-form */}
        <input type="hidden" {...register("inquiryType")} />

        <div
          onClick={() => setOpen(!open)}
          className={`w-full border rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer transition
      focus-within:ring-2 focus-within:ring-[#1c4584]
      ${
        errors.inquiryType
          ? "border-2 border-red-500"
          : "border-gray-300 hover:border-gray-400"
      }`}
        >
          <span className={selectedInquiry ? "text-gray-800" : "text-gray-400"}>
            {selectedInquiry || "Select Inquiry Type"}
          </span>

          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>

        {open && (
          <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 max-h-60 overflow-y-auto">
            {inquiryOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelectedInquiry(option);
                  setValue("inquiryType", option);
                  trigger("inquiryType");
                  setOpen(false);
                }}
                className="px-5 py-4 cursor-pointer hover:bg-[#f1f1f1] transition border-b last:border-none"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Message */}
      <div  className="mb-3.5">
          <FieldLabel text="Message" />
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Message"
          className={`w-full rounded-lg px-4 py-3 border transition-all duration-200
    focus:outline-none focus:border-[#1c4584] focus:ring-2 focus:ring-[#1c4584]/20 ${
            errors.message ? "border-2 border-red-500" : "border-gray-300"
          }`}
        />
      </div>

      <button
        disabled={isSubmitting}
        className="w-full bg-[#1c4584] hover:bg-[#17ace4] text-white py-3 rounded-lg cursor-pointer"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  industry: string;
  country: string;
};

type FloatingProps = {
  label: string;
  register: any;
  error?: string;
};

function FloatingInput({ label, register, error }: FloatingProps) {
  return (
    <div className="relative">
      <input
        {...register}
        placeholder=" "
        className={`peer w-full border rounded-xl px-4 pt-6 pb-2 bg-gray-50
        focus:bg-white transition-all duration-300
        ${
          error
            ? "border-red-500"
            : "border-gray-300 focus:border-[#1c4584] focus:ring-2 focus:ring-[#1c4584]/20"
        }`}
      />
      <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all pointer-events-none 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400
        peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1c4584]">
        {label}
      </label>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

type Props = {
  onSuccess: () => void;
};

export default function DownloadForm({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Semiconductor",
    "Electronics",
    "Medical Devices",
    "Discrete Manufacturing",
    "Solar",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data);
    onSuccess();
  };

  // 🔥 THANK YOU STATE
  if (isSubmitted) {
    return (
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="text-2xl font-semibold text-[#1c4584] mb-4">
          Thank You!
        </h3>
        <p className="text-gray-600 leading-7">
          Your request has been received successfully.
          <br />
          You can now view the full case study below.
        </p>
      </div>
    );
  }

  // 🔥 FORM STATE
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 transition duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Fill out the form below to download the document.
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <FloatingInput
          label="Name*"
          register={register("name", { required: "Name is required" })}
          error={errors.name?.message}
        />

        <FloatingInput
          label="Email*"
          register={register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />

        <FloatingInput
          label="Company Name*"
          register={register("company", { required: "Company name is required" })}
          error={errors.company?.message}
        />

        {/* Industry Dropdown */}
        <div ref={dropdownRef} className="relative">
          <input type="hidden" {...register("industry", { required: true })} />

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`w-full rounded-xl px-4 py-4 flex justify-between items-center
            bg-gray-50 transition-all duration-300
            ${
              errors.industry
                ? "border-2 border-red-500"
                : "border border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-[#1c4584]/20"
            }`}
          >
            <span className={selected ? "text-gray-900" : "text-gray-400"}>
              {selected || "Select Industry*"}
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                open ? "rotate-180 text-[#1c4584]" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute z-50 mt-3 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setValue("industry", option);
                    trigger("industry");
                    setOpen(false);
                  }}
                  className={`px-5 py-4 cursor-pointer transition-all duration-200
                  ${
                    selected === option
                      ? "bg-[#1c4584] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}

          {errors.industry && (
            <p className="text-red-500 text-sm mt-1">
              Industry is required
            </p>
          )}
        </div>

        <FloatingInput
          label="Country*"
          register={register("country", { required: "Country is required" })}
          error={errors.country?.message}
        />

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-semibold text-white cursor-pointer
          bg-gradient-to-r from-[#17ace4] to-[#1c4584]
          transition-all duration-300
          hover:shadow-lg hover:-translate-y-1
          active:scale-95"
        >
          Download Now
        </button>

      </form>
    </div>
  );
}
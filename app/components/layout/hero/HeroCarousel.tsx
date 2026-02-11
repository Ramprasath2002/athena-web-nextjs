"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Gain End-to-End Visibility in Medical Device Manufacturing",
    desc: "Watch the on-demand webinar to learn how manufacturers achieve visibility, compliance, and operational excellence.",
    cta: "Download Now",
    image: "/assets/images/Images-06.webp",
  },
  {
    title: "Digitizing the Manufacturing Enterprise Since 2011",
    desc: "Leveraging deep expertise to enhance partnerships and drive long-term manufacturing success.",
    cta: "Connect Us",
    image: "/assets/images/digital-transformation.jpg",
  },

  {
    title: "About Us",
    desc: "Athena is an Industry 4.0 Enterprise Manufacturing Solutions provider, assisting companies and driving their Industry 4.0 roadmap, centered on Digital Transformation.",
    cta: "About Us",
    image: "/assets/images/about-us.jpg",
  },

  {
    title: "Expertise in MES, PLM, ERP & More",
    desc: "Specialized in MES, PLM, ERP, CMMS, and smart factory analytics.",
    cta: "MES, PLM & More",
    image: "/assets/images/mes-plm-erp.jpg",
  },

  {
    title: "Siemens Alliance Partner",
    desc: "Experienced in implementing and upgrading Opcenter MES across versions, from Camstar 3.2 to Opcenter 2410, ensuring seamless transitions and optimized performance.",
    cta: "Siemens Alliance Partner",
    image: "/assets/images/Images-05.webp",
  },

  {
    title: "Critical Manufacturing Premier Implementation Partner",
    desc: "Athena specializes in the implementation, upgrade, and customization of CM MES, along with seamless integrations with PLM, ERP, LIMS, and Camline.",
    cta: "CM",
    image: "/assets/images/Images-03.webp",
  },

  {
    title:
      "Athena Announces Strategic Authorised Reseller Partnership with twinzo",
    desc: "Strengthening smart manufacturing visibility and operational intelligence through Twinzo’s digital twin platform.",
    cta: "twinzo",
    image: "/assets/images/Images-04.webp",
  },

  {
    title: "Eyelit Implementation Partner",
    desc: "As an official Eyelit Technologies partner, Athena delivers expertise in deploying Eyelit MES and Equipment Connect across semiconductor, solar, LED/laser diode, and medical device industries.",
    cta: "Eyelit",
    image: "/assets/images/Images-01.webp",
  },

  {
    title: "ECO Accelerators",
    desc: "Speed up engineering change workflows with intelligent automation. ECO Accelerators handle tracking, approvals, execution, and traceability while ensuring compliance.",
    cta: "Accelerators",
    image: "/assets/images/eco-accelerators.jpg",
  },

  {
    title:
      "Athena and Tech Mahindra Announce Partnership to Accelerate Smart Manufacturing",
    desc: "Driving AI-enabled MES solutions to accelerate smart manufacturing adoption and digital transformation.",
    cta: "Tech Mahindra",
    image: "/assets/images/tech-mahindra.jpg",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const total = slides.length;

  const prev = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const next = () => {
    if (index === total - 1) return;
    setIndex(index + 1);
  };

  /* ✅ AUTO PLAY */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === total - 1 ? 0 : i + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background */}
      <div
        className="
          absolute inset-0
          liquid-bg
        "
      />

      {/* Slide Container */}
      <div className="relative h-full flex items-center">
        <div className="w-full flex justify-center px-6">
          <div
            className="
    w-full max-w-[1200px]
    rounded-[40px]
    px-10 md:px-10
    py-12 md:py-14
    grid md:grid-cols-2 gap-12 items-center
  "
          >
            {/* LEFT */}
            <div>
              <h1 className="text-white text-3xl md:text-3xl font-semibold leading-tight mb-6">
                {slides[index].title}
              </h1>

              <p className="text-white/80 text-base md:text-lg mb-8 max-w-[520px]">
                {slides[index].desc}
              </p>

              <button className="cta-btn relative overflow-hidden text-white font-semibold px-8 py-3 rounded-xl">
                <span className="relative z-10">{slides[index].cta}</span>
                <span className="shine" />
              </button>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-3xl bg-[#0a2230] p-5 md:p-0">
                <Image
                  src={slides[index].image}
                  width={600}
                  height={380}
                  className="rounded-2xl w-full object-cover"
                  alt={""}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          disabled={index === 0}
          className={`
    absolute left-6 md:left-12 top-1/2 -translate-y-1/2
    p-3 rounded-full transition
    ${
      index === 0
        ? "bg-white/10 text-white/40 cursor-not-allowed"
        : "bg-white/20 hover:bg-white/30 text-white"
    }
  `}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          disabled={index === total - 1}
          className={`
    absolute right-6 md:right-12 top-1/2 -translate-y-1/2
    p-3 rounded-full transition
    ${
      index === total - 1
        ? "bg-white/10 text-white/40 cursor-not-allowed"
        : "bg-white/20 hover:bg-white/30 text-white"
    }
  `}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
        w-4 h-4 rounded-full flex items-center justify-center
        border transition
        ${
          i === index
            ? "border-[var(--brand-accent)]"
            : "border-white/40 hover:border-white"
        }
      `}
          >
            <span
              className={`
          w-2 h-2 rounded-full transition
          ${i === index ? "bg-white" : "bg-transparent"}
        `}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

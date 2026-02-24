"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
  fixed bottom-6 left-6 z-50
  w-14 h-14
  flex items-center justify-center
  rounded-full
  bg-sky-600 hover:bg-sky-700
  text-white
  shadow-lg hover:shadow-xl
  transition-all duration-300 ease-in-out
  ${
    visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-5 pointer-events-none"
  }
`}
    >
      <ArrowUp size={22} />
    </button>
  );
}

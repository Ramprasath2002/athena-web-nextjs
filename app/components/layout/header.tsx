"use client";

import { useState } from "react";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 900) {
      // Always restore scroll on desktop
      document.body.style.overflow = "auto";
    } else {
      // Mobile behavior
      document.body.style.overflow = open ? "hidden" : "auto";
    }
  };

  handleResize(); // run immediately
  window.addEventListener("resize", handleResize);

  return () => {
    document.body.style.overflow = "auto";
    window.removeEventListener("resize", handleResize);
  };
}, [open]);




  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo/Athenatec-Logo.png"
            alt="Athena"
            className="h-16 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
      <nav className="hidden [@media(min-width:900px)]:flex items-center gap-10 text-[15px] text-gray-700">
          <Link href="/about">About</Link>
          <Link href="/accelerators">Athena Accelerators</Link>
          <HeaderMenu />
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
       className="relative z-50 flex h-[30px] w-[30px] flex-col items-center justify-center [@media(min-width:900px)]:hidden"
        >
          <span
            className={`absolute h-[3px] w-[30px] bg-black transition-all duration-300 ease-in-out ${
              open ? "rotate-45" : "-translate-y-[8px]"
            }`}
          />
          <span
            className={`absolute h-[3px] w-[30px] bg-black transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-[3px] w-[30px] bg-black transition-all duration-300 ease-in-out ${
              open ? "-rotate-45" : "translate-y-[8px]"
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
      className={`[@media(min-width:900px)]:hidden bg-white transition-all duration-300 ease-in-out
    ${
      open
        ? "opacity-100 scale-y-100 max-h-[calc(100vh-80px)]"
        : "opacity-0 scale-y-0 max-h-0 pointer-events-none"
    }
  `}
      >
        <nav
          className="
      flex flex-col gap-6 px-6 py-6 text-gray-700
      max-h-[calc(100vh-80px)]
      overflow-y-auto
    "
        >
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/accelerators" onClick={() => setOpen(false)}>
            Athena Accelerators
          </Link>

          <HeaderMenu variant="mobile" onNavigate={() => setOpen(false)} />

          <Link href="/career" onClick={() => setOpen(false)}>
            Career
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

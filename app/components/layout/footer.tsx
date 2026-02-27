import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c4584] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* TOP */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-6">
            <img
              src="/assets/logo/footer-logo.png"
              alt="Athena"
              className="h-12 w-auto"
            />

            <p className="max-w-sm text-sm leading-relaxed text-[#c7d4f1]">
              We build enterprise-grade digital solutions that scale, secure,
              and simplify complex manufacturing ecosystems.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-[#5172b0]/30 p-2 transition hover:bg-[#1877F2]"
              >
                <img src="/assets/logo/facebook.svg" alt="" className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-[#5172b0]/30 p-2 transition hover:bg-[#E4405F]"
              >
                <img src="/assets/logo/instagram.svg" alt="" className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="X"
                className="rounded-full bg-[#5172b0]/30 p-2 transition hover:bg-[#000000]"
              >
                <img src="/assets/logo/twitter.svg" alt="" className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="rounded-full bg-[#5172b0]/30 p-2 transition hover:bg-[#0A66C2]"
              >
                <img src="/assets/logo/linkedin.svg" alt="" className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="YouTube"
                className="rounded-full bg-[#5172b0]/30 p-2 transition hover:bg-[#FF0000]"
              >
                <img src="/assets/logo/youtube.svg" alt="" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* LOCATION */}
          <div className="space-y-4 text-sm">
            <h4 className="text-base font-semibold text-white">
              United States
            </h4>
            <p className=" font-medium pb-0 mb-1 text-[16px]">Headquarters:</p>
            <Link
              href="https://maps.app.goo.gl/HF6t3r3L8aRoPsYy7"
              target="_blank"
              className="leading-relaxed text-[#c7d4f1] hover:underline"
            >
              859 Corporate Way <br />
              Fremont, California <br />
              94539
            </Link>
          </div>

          {/* CONTACT */}
          <div className="space-y-6 text-sm">
            <div>
              <h4 className="text-base font-semibold text-white">
                Work inquiries
              </h4>
              <Link
                href="info@athenatec.com"
                className="mt-2 inline-block font-medium hover:underline"
                target="_blank"
              >
               info@athenatec.com
              </Link>
            </div>

            <div>
              <h4 className="text-base font-semibold text-white">Contact</h4>
              <Link
                href="tel:510-687-0900"
                className="mt-2 inline-block font-medium hover:underline"
                target="_blank"
              >
                510-687-0900
              </Link>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div className="space-y-4 text-sm">
            <h4 className="text-base font-semibold text-white">Solutions</h4>

            {[
              "MES Solutions",
              "PLM Solutions",
              "Enterprise ERP",
              "Cyber Security Services",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-[#c7d4f1] transition hover:text-[#17ace4]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#5172b0]/40 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-[#c7d4f1]">
            © 2026 Athena Technologies. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="text-[#c7d4f1] hover:text-[#17ace4]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#c7d4f1] hover:text-[#17ace4]">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

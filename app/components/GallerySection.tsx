"use client";

import Image from "next/image";
import Link from "next/link";

export type GalleryItem = {
  title: string;
  image: string;
  slug: string;
};

type Props = {
  title?: string;
  data: GalleryItem[];
  bg?: "light" | "white";
};

export default function GallerySection({
  title = "Gallery",
  data,
  bg = "light",
}: Props) {
  return (
    <section
      className={`py-20 ${
        bg === "light" ? "bg-[#f5f7fa]" : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f3b73] mb-14">
          {title}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {data.map((item, index) => (
            <Link
              href={item.slug}
              key={index}
              className="group relative rounded-2xl overflow-hidden h-[260px] md:h-[280px] lg:h-[300px]"
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/80" />

              {/* Title */}
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white text-lg md:text-xl font-semibold leading-snug">
                  {item.title}
                </h3>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

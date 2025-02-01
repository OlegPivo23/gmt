"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const images = [
  "/img/galary/galary-img1.png",
  "/img/galary/image (13).png",
  "/img/galary/image (14).png",
  "/img/galary/image (15).png",
  "/img/galary/image (16).png",
  "/img/galary/image (17).png",
  "/img/galary/image (18).png",
  "/img/galary/image (19).png",
  "/img/galary/image (20).png",
  "/img/galary/image (21).png",
  "/img/galary/image (22).png",
  "/img/galary/image (23).png",
  "/img/galary/image (28).png",
  "/img/galary/image (29).png",
  "/img/galary/image (24).png",
  "/img/galary/image (25).png",
  "/img/galary/image (26).png",
  "/img/galary/image (27).png",
];

export default function GalaryComponent() {
  const pathname = usePathname(); 
  const displayedImages = pathname === "/galary" ? images : images.slice(0, 9); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayedImages.map((item, i) => (
        <div key={i} className="relative w-full h-64">
          <Image
            src={item}
            alt={`Gallery image ${i + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}

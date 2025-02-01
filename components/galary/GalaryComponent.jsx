import Image from "next/image";

const images = [
  "/img/galary/galary-img1.png",
  "/img/galary/galary-img1.png",
  "/img/galary/galary-img1.png",
  "/img/galary/galary-img1.png",
  "/img/galary/galary-img1.png",
  "/img/galary/galary-img1.png",
]; 

export default function GalaryComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((item, i) => (
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

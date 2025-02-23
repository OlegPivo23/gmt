"use client";

import Image from "next/image"; // Импортируем компонент Image
import TitleComponent from "../UI/title/TitleComponent";
import { useState } from "react";

export default function MovieAboutComponent() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="flex flex-col gap-[25px]">
      <TitleComponent>Фильм о нас</TitleComponent>
      <div>
        <div className=" w-full max-w-[1416px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[647px] bg-[#3d3d3d] relative overflow-hidden">
          {showVideo ? (
            <iframe
              className="w-full h-full"
              src="https://rutube.ru/video/ca1cae7e0e4c94be496de191938487ae/?r=wd"
              title="Фильм о нас"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              onClick={toggleVideo}
            >
              <Image
                src="/icons/movieAbout/play.svg"
                alt="Play"
                width={80}
                height={80}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

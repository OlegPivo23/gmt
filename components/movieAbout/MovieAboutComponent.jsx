"use client";

import Image from "next/image";
import TitleComponent from "../UI/title/TitleComponent";
import { useState } from "react";

export default function MovieAboutComponent() {
  const [showVideo, setShowVideo] = useState(false);
  const videoSrc = showVideo
    ? "https://www.youtube.com/embed/o1AJV90p22U?autoplay=1&mute=1"
    : "";

  // URL превью из YouTube
  const thumbnailUrl =
    "https://img.youtube.com/vi/o1AJV90p22U/maxresdefault.jpg";

  return (
    <div className="flex flex-col gap-[25px]">
      <TitleComponent>Фильм о нас</TitleComponent>
      <div>
        <div className="w-full max-w-[1416px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[647px] bg-[#3d3d3d] relative overflow-hidden rounded-[40px]">
          {showVideo ? (
            <iframe
              className="w-full h-full"
              src={videoSrc}
              title="Фильм о нас"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Превью из YouTube */}
              <img
                src="/img/movie/default.png"
                alt="Превью видео"
                className="absolute inset-0 w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              {/* Кнопка Play */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src="/icons/movieAbout/play.svg"
                  alt="Play"
                  width={80}
                  height={80}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

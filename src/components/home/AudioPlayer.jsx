"use client";
import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "../SvgIcons";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryPlay = () => {
      audioRef.current.play();
      setIsPlaying(true);

      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };

    window.addEventListener("click", tryPlay);
    window.addEventListener("touchstart", tryPlay);

    return () => {
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  const startAndPauseMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center fixed sm:absolute right-4 top-[90%] sm:top-[32%] md:top-[45%] lg:top-[60%] xl:top-[65%] sm:right-[2%] lg:right-[8%] border-2 group border-[#B9A155]  w-fit p-2 sm:p-6 lg:p-8 rounded-full h-fit bg-[ #B58C6703] backdrop-blur-sm z-10 ">
        <button
          className="cursor-pointer border-2 sm:border-4    lg:border-6 rounded-full sm:p-2 lg:p-4  relative z-10 text-black group-hover:text-white transition-colors duration-300"
          onClick={startAndPauseMusic}
        >
          {isPlaying ? (
            <PauseIcon className="size-6 sm:size-8 md:size-10 lg:size-16" />
          ) : (
            <PlayIcon className="size-6 sm:size-8 md:size-10 lg:size-16" />
          )}
        </button>
      </div>
      <audio
        autoPlay={true}
        ref={audioRef}
        src="/audio/churassco-music.mp3"
        loop
      />
    </>
  );
}

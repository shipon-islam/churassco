import videoBanner from "@/assets/home/heritage-home-banner.webp";
import Image from "next/image";
export default function VideoBanner() {
  return (
    <div className="container">
      <Image
        src={videoBanner}
        width={1443}
        height={599}
        alt="video-banner"
        className="w-full max-h-[599px] object-cover"
      />
    </div>
  );
}

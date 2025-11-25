"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const clientLogos = [
  {
    id: 1,
    logo: "/images/sponsor/band-logo.png",
  },
  {
    id: 2,
    logo: "/images/sponsor/band-logo.png",
  },
  { id: 3, logo: "/images/sponsor/band-logo.png" },
  { id: 4, logo: "/images/sponsor/band-logo.png" },
  { id: 5, logo: "/images/sponsor/band-logo.png" },
  {
    id: 6,
    logo: "/images/sponsor/band-logo.png",
  },
  { id: 7, logo: "/images/sponsor/band-logo.png" },
  {
    id: 8,
    logo: "/images/sponsor/band-logo.png",
  },
];
export default function SponsorSlide() {
  return (
    <div className="mt-10 lg:mt-32 relative z-10 ">
      <div className="text-center mt-14 w-[90%] lg:w-[60%] xl:w-[50%] mx-auto">
        <h2 className="font-monthoers  text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
          DEDICATED TO THE ART & SCIENCE OF CONTEMPORARY CUISINE
        </h2>
        <h4 className="font-monthoers text-xl mt-6 sm:text-2xl md:text-3xl lg:text-4xl text-orange">
          for modern restaurateurs
        </h4>
      </div>

      <div className="bg-dark-brown mt-10 ">
        <Marquee
          speed={50}
          gradient={false}
          autoFill={true}
          className="container "
        >
          <ul className=" flex gap-x-4 md:gap-x-14 items-center  !px-10  py-4">
            {clientLogos.map((logos) => (
              <li key={logos.id}>
                <Image
                  src={logos.logo}
                  width={853}
                  height={100}
                  className={`h-full w-[753px]  object-cover  rounded-md px-4 py-2 `}
                  alt="service-partner"
                />
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </div>
  );
}

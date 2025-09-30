"use client";
import serviceImage from "@/assets/cards/curry.jpg";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const servicesApi = [
  {
    id: 1,
    title: "THEY SAY",
    client: "By Dora Johns",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: serviceImage,
  },
  {
    id: 2,
    title: "THEY SAY",
    client: "By Dora Johns",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: serviceImage,
  },
];
export default function ClientReviews() {
  return (
    <div className="container mt-8">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
      >
        {servicesApi?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="grid md:grid-cols-2 bg-dark-brown md:min-h-[503px]">
                <div className="bg-black hidden md:grid place-items-center relative ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="max-w-[435px] max-h-[489px] object-contain"
                  />
                  <p className="absolute bottom-20 right-14 text-orange font-monthoers text-4xl -rotate-12 text-center">
                    Our gest say <br /> about us
                  </p>
                </div>
                <div className="md:w-4/5 p-14 text-center md:text-left">
                  <h2 className="lowercase text-4xl font-bernier text-orange">
                    {item.title}
                  </h2>
                  <p className="mt-9 mb-5">{item.description}</p>
                  <p>
                    <span className="text-orange pr-2">/</span>
                    {item.client}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

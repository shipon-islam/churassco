"use client";
import serviceImage from "@/assets/cards/curry.jpg";
import Image from "next/image";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TransparentButton from "../TransparentButton";
const businessApi = [
  {
    id: 1,
    title: "BEAUTIFULLY CRAFTED MENUS",
    description:
      "Fidalgo provides you with a number of visually captivating ways to present your restaurant, bar or café menu thanks to the flexible Restaurant Menu List element & 4 predesigned menu templates",
    images: [serviceImage, serviceImage, serviceImage],
  },
  {
    id: 2,
    title: "BEAUTIFULLY CRAFTED MENUS",
    description:
      "Fidalgo provides you with a number of visually captivating ways to present your restaurant, bar or café menu thanks to the flexible Restaurant Menu List element & 4 predesigned menu templates",
    images: [serviceImage, serviceImage, serviceImage],
  },
  {
    id: 3,
    title: "BEAUTIFULLY CRAFTED MENUS",
    description:
      "Fidalgo provides you with a number of visually captivating ways to present your restaurant, bar or café menu thanks to the flexible Restaurant Menu List element & 4 predesigned menu templates",
    images: [serviceImage, serviceImage, serviceImage],
  },
  {
    id: 4,
    title: "BEAUTIFULLY CRAFTED MENUS",
    description:
      "Fidalgo provides you with a number of visually captivating ways to present your restaurant, bar or café menu thanks to the flexible Restaurant Menu List element & 4 predesigned menu templates",
    images: [serviceImage, serviceImage, serviceImage],
  },
];
export default function BusinessLayout() {
  return (
    <div className="container mt-12 md:mt-8">
      <div className="font-monthoers text-lg md:text-5xl text-center mb-14 -rotate-6 text-orange">
        <h5>Every layout your </h5>
        <h4 className="pl-20">business may need</h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {businessApi?.map((businessItem) => (
          <div
            className="border-8 border-orange group  cursor-pointer relative "
            key={businessItem.id}
          >
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoHeight={true}
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              modules={[Autoplay, Pagination]}
            >
              {businessItem.images?.map((item, index) => {
                return (
                  <SwiperSlide key={index} key={item.id}>
                    <div className="!h-[400px] xl:!h-[500px]">
                      <Image
                        src={item}
                        alt={item}
                        width={500}
                        height={500}
                        className=" object-cover w-full !h-full"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-brown w-full h-full p-6 md:p-14">
              <h2 className="lowercase text-3xl md:text-4xl font-bernier">
                {businessItem.title}
              </h2>
              <p className="mt-9 mb-10 md:mb-20">{businessItem.description}</p>
              <TransparentButton name="Read more" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

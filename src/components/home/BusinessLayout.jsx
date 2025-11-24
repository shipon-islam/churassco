"use client";
import chickenRice from "@/assets/cards/chicken-rice.webp";
import menuList from "@/assets/cards/menu-list.webp";
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
    images: [menuList, chickenRice, menuList],
  },
  {
    id: 2,
    title: "BEAUTIFULLY CRAFTED MENUS",
    description:
      "Fidalgo provides you with a number of visually captivating ways to present your restaurant, bar or café menu thanks to the flexible Restaurant Menu List element & 4 predesigned menu templates",
    images: [chickenRice, menuList, chickenRice],
  },
  {
    id: 3,
    title: "BEAUTIFULLY CRAFTED MENUS",
    description:
      "Fidalgo provides you with a number of visually captivating ways to present your restaurant, bar or café menu thanks to the flexible Restaurant Menu List element & 4 predesigned menu templates",
    images: [chickenRice, menuList, chickenRice],
  },
  {
    id: 4,
    title: "BEAUTIFULLY CRAFTED MENUS",
    description:
      "Fidalgo provides you with a number of visually captivating ways to present your restaurant, bar or café menu thanks to the flexible Restaurant Menu List element & 4 predesigned menu templates",
    images: [menuList, chickenRice, menuList],
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
            className="border-12 border-[#18282F] hover:border-[#FBE7B2] group  cursor-pointer relative "
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
            <div className="absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-orange w-full h-full p-6 md:p-14 text-black">
              <h2 className=" text-4xl md:text-5xl font-monthoers">
                {businessItem.title}
              </h2>
              <p className="mt-16 mb-10 md:mb-20 sm:text-lg lg:text-xl">
                {businessItem.description}
              </p>
              <div className="w-fit mx-auto">
                <TransparentButton
                  className="border-2 !border-[#FBE7B2] hover:!bg-[#FBE7B2] !text-black"
                  name="Read more"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

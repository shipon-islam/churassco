"use client";
import serviceImage from "@/assets/home/meat-slider.webp";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TransparentButton from "../TransparentButton";
const servicesApi = [
  {
    id: 1,
    title: "cHEF’S special",
    description:
      "A feast crafted for true food lovers. Our Chef’s Special Platter brings together aromatic Chickpea Rice, rich Chicken Kebab Karai, slow-cooked Lahori Beef, and smoky Tengri Kebab, served with fresh salad and soft Rumali Ruti for the perfect balance of flavor and tradition.",
    image: serviceImage,
  },
  {
    id: 2,
    title: "our food philosophy",
    description:
      "A feast crafted for true food lovers. Our Chef’s Special Platter brings together aromatic Chickpea Rice, rich Chicken Kebab Karai, slow-cooked Lahori Beef, and smoky Tengri Kebab, served with fresh salad and soft Rumali Ruti for the perfect balance of flavor and tradition.",
    image: serviceImage,
  },
];
export default function ServiceSlider() {
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
              <div className="flex flex-col gap-4 md:flex-row justify-between md:bg-dark-brown p-4">
                <div className="flex-1">
                  <div className="bg-dark-brown lg:w-4/5 p-8 sm:p-12 md:p-8 lg:p-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-monthoers text-center md:text-left text-orange">
                      {item.title}
                    </h2>
                    <p className="mt-16 sm:text-lg lg:text-xl text-center md:text-left max-w-[523px]">
                      {item.description}
                    </p>
                  </div>

                  <TransparentButton
                    name="Read more"
                    className="w-fit block md:ml-14 mt-10 sm:mt-15 md:mt-20 mb-14 mx-auto border-2 border-orange hover:bg-orange"
                  />
                </div>
                <div className="border-1 border-orange flex-1 w-full max-w-[471px] mx-auto md:mx-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={471}
                    height={670}
                    className="w-full md:max-w-[371px] xl:max-w-[471px] h-full xl:max-h-[670px] object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

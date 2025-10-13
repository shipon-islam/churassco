"use client";
import serviceImage from "@/assets/cards/curry.jpg";
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
            <SwiperSlide style={{ height: "100%" }} key={item.id}>
              <div className="grid  md:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_2fr] md:bg-dark-brown">
                <div className="">
                  <div className="bg-dark-brown lg:w-4/5 p-8 sm:p-12 md:p-8 lg:p-14">
                    <h2 className="lowercase text-4xl font-bernier text-center md:text-left">
                      {item.title}
                    </h2>
                    <p className="mt-9 text-center md:text-left">
                      {item.description}
                    </p>
                  </div>

                  <TransparentButton
                    name="Read more"
                    className="w-fit block md:ml-14 mt-10 sm:mt-15 md:mt-20 mb-14 mx-auto"
                  />
                </div>
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full max-h-[701px] object-cover"
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

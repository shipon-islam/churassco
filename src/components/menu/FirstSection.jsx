import Image from "next/image";
import { OrangeRectSkewIcon } from "../SvgIcons";

export default function FirstSection() {
  return (
    <div className="container grid md:grid-cols-2 gap-8 py-20">
      <div className="order-2 md:order-1 text-center md:text-left">
        <div className="flex items-center gap-2 w-fit mx-auto md:mx-0">
          <OrangeRectSkewIcon />
          <h1 className="font-bernier text-3xl tracking-[8px] ml-1.5">Soup</h1>
          <OrangeRectSkewIcon />
        </div>
        <div className="md:mt-16">
          <h2 className="text-2xl uppercase py-10 md:py-16 flex items-center gap-4 w-fit mx-auto md:mx-0">
            <span className="size-2 bg-white inline-block"></span> Soup of the
            day
          </h2>
          <ul className="text-xl uppercase md:space-y-10 text-gray-300 ml-6">
            <li>A warm, hearty bowl crafted fresh daily</li>
            <li>with seasonal ingredients. perfect</li>
            <li>comfort food to start your churrasco</li>
            <li>experiement</li>
          </ul>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <Image
          src="/images/menu/products/cheese.jpg"
          width={500}
          height={700}
          alt="product"
          className="border-4 border-orange object-cover mx-auto md:mx-0 md:ml-auto rounded-t-full p-1"
        />
      </div>
    </div>
  );
}

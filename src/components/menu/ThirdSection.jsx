import Image from "next/image";
import { OrangeRectSkewIcon } from "../SvgIcons";

export default function ThirdSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
      <div className="order-2 md:order-1">
        <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
          <OrangeRectSkewIcon />
          <h1 className="font-bernier text-3xl tracking-[8px] ml-1.5">
            Fried stuff
          </h1>
          <OrangeRectSkewIcon />
        </div>
        <div className="w-fit mx-auto md:mx-0 md:mr-auto mt-5 md:mt-16">
          <ul className="text-xl uppercase md:space-y-10 text-gray-300 ml-6 list-disc ">
            <li>fried koel</li>
            <li>chicken tenderloin</li>
            <li>lemon chili wings</li>
            <li>buffalo wings</li>
            <li>cream cheddar wings</li>
            <li>french fries</li>
          </ul>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <Image
          src="/images/menu/products/cheese.jpg"
          width={500}
          height={700}
          alt="product"
          className="border-4 border-orange object-cover mx-auto md:mx-0 md:ml-auto  md:rounded-full p-1"
        />
      </div>
    </div>
  );
}

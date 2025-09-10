import Image from "next/image";
import { OrangeRectSkewIcon } from "../SvgIcons";

export default function SecondSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
      <div className="">
        <Image
          src="/images/menu/products/cheese.jpg"
          width={500}
          height={700}
          alt="product"
          className="border-4 border-orange object-cover mx-auto md:mx-0 md:mr-auto md:rounded-tr-[50%] p-1"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
          <OrangeRectSkewIcon />
          <h1 className="font-bernier text-3xl tracking-[8px] ml-1.5">salad</h1>
          <OrangeRectSkewIcon />
        </div>
        <div className="md:mt-16 text-center md:text-left">
          <h2 className="text-2xl uppercase pt-6 flex items-center gap-4 w-fit mx-auto md:mx-0 md:mr-auto">
            <span className="size-2 bg-white inline-block"></span> grilled
            chicken salad
          </h2>
          <h2 className="text-2xl uppercase py-6 flex items-center gap-4 w-fit mx-auto md:mx-0 md:mr-auto">
            <span className="size-2 bg-white inline-block"></span> cashew nut
            salad
          </h2>
          <ul className="text-xl uppercase md:space-y-10 text-gray-300 ml-6">
            <li>fresh, crisp, and full of flaver</li>
            <li>our salads balance healthy</li>
            <li>greens with hearty toppings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

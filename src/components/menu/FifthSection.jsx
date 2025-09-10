import Image from "next/image";
import { OrangeRectSkewIcon } from "../SvgIcons";

export default function FifthSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
      <div className="order-2 md:order-2">
        <div className="flex items-center gap-2 w-fit  mx-auto md:mx-0 md:mr-auto">
          <OrangeRectSkewIcon />
          <h1 className="font-bernier text-3xl tracking-[8px] ml-1.5">
            doner kebab
          </h1>
          <OrangeRectSkewIcon />
        </div>
        <div className="mt-16 text-center md:text-left">
          <h2 className="text-2xl uppercase pt-6 flex items-center gap-4 mx-auto md:mx-0 md:mr-auto w-fit">
            <span className="size-2 bg-white inline-block"></span> chicken doner
          </h2>
          <h2 className="text-2xl uppercase py-6 flex items-center gap-4 mx-auto md:mx-0 md:mr-auto w-fit">
            <span className="size-2 bg-white inline-block"></span> beef doner
          </h2>
          <ul className="text-xl uppercase md:space-y-10 text-gray-300 ml-6">
            <li>layer of flavor wrapped to</li>
            <li>perfection. our chicken and</li>
            <li>beef ndoners bring the streets</li>
            <li>of istanbul to khilgaon</li>
          </ul>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <Image
          src="/images/menu/products/cheese.jpg"
          width={500}
          height={700}
          alt="product"
          className="border-4 border-orange object-cover mx-auto md:ml-auto rounded-b-full md:rounded-full p-1"
        />
      </div>
    </div>
  );
}

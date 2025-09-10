import Image from "next/image";
import { OrangeRectSkewIcon } from "../SvgIcons";

export default function ForthSection() {
  return (
    <div className="container grid md:grid-cols-2 gap-8 py-20">
      <div className="">
        <Image
          src="/images/menu/products/cheese.jpg"
          width={500}
          height={700}
          alt="product"
          className="border-4 border-orange object-cover mx-auto md:mx-0 md:mr-auto md:rounded-br-[50%] p-1"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
          <OrangeRectSkewIcon />
          <h1 className="font-bernier text-3xl tracking-[8px] ml-1.5">kebab</h1>
          <OrangeRectSkewIcon />
        </div>
        <div className="mt-16 w-fit mx-auto md:mx-0 md:mr-auto">
          <ul className="text-xl uppercase space-y-10 text-gray-300 ml-6 list-disc">
            <li>chicken boti kebab</li>
            <li>chicken reshmi kebab</li>
            <li>chicken kandahari kebab</li>
            <li>chicken afghani kebab</li>
            <li>beef adana kebab</li>
            <li>beef bihari kebab</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

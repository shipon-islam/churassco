import homeBanner from "@/assets/banners/home-banner.jpg";
import Hero from "@/components/Hero";
import { OrangeRectSkewIcon } from "@/components/SvgIcons";
import Image from "next/image";
export default function BreadAndDessert() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            Bread & Dessert
          </h1>
          <p className="text-sm mt-4 md:mt-10 uppercase traking-[17%] max-w-[600px] mx-auto">
            From oven-fresh breads to sweet indulgent desserts comfort and
            delight in every bite
          </p>
        </div>
      </Hero>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Fried stuff
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="w-fit mx-auto md:mx-0 md:mr-auto mt-5 md:mt-16">
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-10 text-gray-300 ml-6 list-disc ">
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
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:ml-auto  md:rounded-full p-1 w-[80%] sm:w-[500px]"
            />
          </div>
        </div>
        <div className="container grid md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="">
            <Image
              src="/images/menu/products/cheese.jpg"
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:mr-auto md:rounded-br-[50%] p-1 w-[80%] sm:w-[500px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                kebab
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="mt-8 md:mt-16 w-fit mx-auto md:mx-0 md:mr-auto">
              <ul className="text-base sm:text-lg md:text-xl uppercase space-y-5 md:space-y-10 text-gray-300 ml-6 list-disc">
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
      </section>
    </main>
  );
}

import homeBanner from "@/assets/banners/home-banner.jpg";
import chickenPasta from "@/assets/menu/chicken-pasta.webp";
import noodles from "@/assets/menu/noodles.webp";
import Hero from "@/components/Hero";
import {
  LeftArrow,
  OrangeRectSkewIcon,
  RightArrow,
} from "@/components/SvgIcons";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            Noodlles & Pasta
          </h1>
          <p className="text-sm mt-4 md:mt-10 uppercase traking-[17%] max-w-[600px] mx-auto">
            Hearty bowls of noodles and pasta, Churrasco style
          </p>
        </div>
      </Hero>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Pasta
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="w-fit mx-auto md:mx-0 md:mr-auto mt-5 md:mt-16">
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-6 text-gray-300 ml-6 list-disc ">
                <li>Alfredo Pasta</li>
                <li>Pollo Penne</li>
                <li>Beef Penne</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={chickenPasta}
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:ml-auto  md:rounded-[45%] p-1 w-[80%] sm:w-[500px] md:h-[500px] lg:h-[680px]"
            />
          </div>
        </div>
        <div className="container grid md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="">
            <Image
              src={noodles}
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:mr-auto md:rounded-br-[50%] p-1 w-[80%] sm:w-[500px] md:h-[500px] lg:h-[680px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Noodles
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="mt-8 md:mt-16 w-fit mx-auto md:mx-0 md:mr-auto">
              <ul className="text-base sm:text-lg md:text-xl uppercase space-y-5 md:space-y-6 text-gray-300 ml-6 list-disc">
                <li>churassco chow mein</li>
                <li>garlic sesame chow mein</li>
                <li>flavourful,filling, and Straight</li>
                <li>
                  from the grill. bowls built to satisfy your hunger and your
                  taste
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center gap-8 justify-center mb-16">
        <Link
          href="/menu/beverages"
          className="border border-black hover:bg-black/40 rounded-full p-1.5 "
        >
          <LeftArrow />
        </Link>
        <Link
          href="/menu/fish-and-platters"
          className="border border-black hover:bg-black/40 rounded-full p-1.5"
        >
          <RightArrow />
        </Link>
      </div>
    </main>
  );
}

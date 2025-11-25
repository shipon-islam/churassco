import homeBanner from "@/assets/banners/home-banner.jpg";
import chickenSalad from "@/assets/menu/chicken-salad.webp";
import desserts from "@/assets/menu/desserts.webp";
import Hero from "@/components/Hero";
import {
  LeftArrow,
  OrangeRectSkewIcon,
  RightArrow,
} from "@/components/SvgIcons";
import Image from "next/image";
import Link from "next/link";
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
                Desserts
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="w-fit mx-auto md:mx-0 md:mr-auto mt-5 md:mt-16">
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-6 text-gray-300 ml-6 list-disc ">
                <li>Red Velvet Cup Cake</li>
                <li>Lemon Tart</li>
                <li>Chocolate Fudge Cake</li>
                <li>Tiramisu Cup</li>
                <li>Brownie</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={desserts}
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
              src={chickenSalad}
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
                Bread
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="mt-8 md:mt-16 w-fit mx-auto md:mx-0 md:mr-auto">
              <ul className="text-base sm:text-lg md:text-xl uppercase space-y-5 md:space-y-6 text-gray-300 ml-6 list-disc">
                <li>Butter Naan</li>
                <li>
                  Rumali Roti <br />
                  Simple, classic, and <br />
                  irresistible <br />
                  Breads that turn every bite <br />
                  into comfort.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center gap-8 justify-center mb-16">
        <Link
          href="/menu/salad-and-kebab"
          className="border border-black hover:bg-black/40 rounded-full p-1.5 "
        >
          <LeftArrow />
        </Link>
        <Link
          href="/menu/bread-and-dessert"
          className="border border-black hover:bg-black/40 rounded-full p-1.5 hidden"
        >
          <RightArrow />
        </Link>
      </div>
    </main>
  );
}

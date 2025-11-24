import homeBanner from "@/assets/banners/home-banner.jpg";
import coldTea from "@/assets/menu/cold-tea.webp";
import hotTea from "@/assets/menu/hot-tea.webp";
import Hero from "@/components/Hero";
import { OrangeRectSkewIcon } from "@/components/SvgIcons";
import Image from "next/image";
export default function Beverages() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            Beverages
          </h1>
          <p className="text-sm mt-4 md:mt-10 uppercase traking-[17%] max-w-[600px] mx-auto">
            The perfect sip to complement every Churrasco bite
          </p>
        </div>
      </Hero>
      <section>
        <div className="container grid md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Lemonade
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="md:mt-16">
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-6 text-gray-300 ml-6 list-disc">
                <li>Lassi</li>
                <li>Coconut Shake</li>
                <li>Molten Chocolat</li>
                <li>Oreo Shake</li>
                <li>Vanilla Milkshak</li>
                <li>Strawberry Sha</li>
                <li>Mango Milkshak</li>
                <li>Chocolate Milks</li>
                <li>Cold Coffee</li>
                <li>Iced Tea</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={coldTea}
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:ml-auto rounded-t-full p-1 w-[80%] sm:w-[500px]"
            />
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="order-1 md:order-2">
            <Image
              src={hotTea}
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:ml-auto rounded-tr-[40%]  p-1 w-[80%] sm:w-[500px] h-auto md:min-h-[550px] lg:min-h-[631px]"
            />
          </div>
          <div className="order-2 md:order-2">
            <div className="flex items-center gap-2 w-fit  mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Beverages (Hot)
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="mt-2 md:mt-16 text-center md:text-left">
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-6 text-gray-300 ml-6 list-disc">
                <li>Hot Chocolate</li>
                <li>Hot Coffee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

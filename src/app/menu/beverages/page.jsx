import homeBanner from "@/assets/banners/home-banner.jpg";
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
                Soup
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="md:mt-16">
              <h2 className="text-lg sm:text-xl md:text-2xl uppercase py-6 sm:py-10 md:py-16 flex items-center gap-4 w-fit mx-auto md:mx-0">
                <span className="size-2 bg-white inline-block"></span> Soup of
                the day
              </h2>
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-10 text-gray-300 ml-6">
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
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:ml-auto rounded-t-full p-1 w-[80%] sm:w-[500px]"
            />
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="order-2 md:order-2">
            <div className="flex items-center gap-2 w-fit  mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                doner kebab
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="mt-2 md:mt-16 text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl uppercase pt-6 flex items-center gap-4 mx-auto md:mx-0 md:mr-auto w-fit">
                <span className="size-2 bg-white inline-block"></span> chicken
                doner
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl uppercase py-6 flex items-center gap-4 mx-auto md:mx-0 md:mr-auto w-fit">
                <span className="size-2 bg-white inline-block"></span> beef
                doner
              </h2>
              <ul className="text-basesm:text-lg md:text-xl uppercase md:space-y-10 text-gray-300 ml-6">
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
              className="border-4 border-orange object-cover mx-auto md:ml-auto rounded-b-full md:rounded-full p-1 w-[80%] sm:w-[500px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

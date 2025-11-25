import homeBanner from "@/assets/banners/home-banner.jpg";
import chickenMomo from "@/assets/menu/chicken-momo.webp";
import chickenRice from "@/assets/menu/chicken-rice.webp";
import fishWithRice from "@/assets/menu/fish-with-rice.webp";
import fryWithCream from "@/assets/menu/fry-with-cream.webp";
import koraiKebab from "@/assets/menu/korai-kebab.webp";
import nakhshi from "@/assets/png/nakhshi.png";
import Hero from "@/components/Hero";
import StyledBorder from "@/components/StyledBorder";
import {
  LeftArrow,
  OrangeRectSkewIcon,
  RightArrow,
} from "@/components/SvgIcons";
import Image from "next/image";
import Link from "next/link";
function FishAndPlatters() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            Fish & Platters
          </h1>
          <p className="text-sm mt-4 md:mt-10 uppercase traking-[17%] max-w-[600px] mx-auto">
            From ocean-fresh grills to hearty sharing platters Churrasco serves
            big flavors made to satisfy every craving.
          </p>
        </div>
      </Hero>
      <section className="bg-body">
        <Image
          src={nakhshi}
          width={100}
          height={100}
          alt="nakjshi"
          className=" mx-auto size-[83px] mt mt-10 md:hidden"
        />
        <div className="container grid md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Main Platters
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="md:mt-16">
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-6 text-white ml-6 list-disc">
                <li>
                  Sirloin Supreme <br />
                  <span className="text-sm text-gray-300">
                    (Fried Rice, Grilled Beef Sirloin, Fries)
                  </span>
                </li>
                <li>
                  Imperial Tso <br />
                  <span className="text-sm text-gray-300">
                    (Fried Rice, Chicken Boti Kebab, General Tso's Chicken)
                  </span>
                </li>
                <li>
                  Mongolian Majesty <br />
                  <span className="text-sm text-gray-300">
                    (Fried Rice, Mongolian Beef, Chicken Boti Kebab)
                  </span>
                </li>
                <li>
                  Bihari Bliss <br />
                  <span className="text-sm text-gray-300">
                    (Fried Rice, Tso Chicken, Beef Bihari Kebab)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={chickenRice}
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:ml-auto rounded-t-full p-1 w-[80%] sm:w-[500px] md:h-[500px] lg:h-[680px]"
            />
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="">
            <Image
              src={chickenMomo}
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:mr-auto md:rounded-tr-[50%] p-1 w-[80%] sm:w-[500px] md:h-[500px] lg:h-[680px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Celestial Feast
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="md:mt-16 text-center md:text-left">
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-6 text-white ml-6 list-disc">
                <li>Buffalo Rolls (5 pcs)</li>
                <li>Chicken Momo (5 pcs)</li>
                <li>Beef Momo (5 pcs)</li>
                <li>Churrasco Fried Rice (1:2)</li>
                <li>Thai Fried Chicken (4 pcs)</li>
                <li>General Tso's Chicken (1:2)</li>
                <li>Mongolian Beef (1:2)</li>
              </ul>
            </div>
          </div>
        </div>
        <StyledBorder />
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Fish
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="w-fit mx-auto md:mx-0 md:mr-auto mt-5 md:mt-16">
              <ul className="text-base sm:text-lg md:text-xl uppercase md:space-y-6 text-white ml-6 list-disc ">
                <li>Fish & Chips</li>
                <li>Grilled Dory</li>
                <li>BBQ Korai (600 gm)</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={fishWithRice}
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:mx-0 md:ml-auto  md:rounded-full p-1 w-[80%] sm:w-[500px] md:h-[600px] lg:h-[680px]"
            />
          </div>
        </div>
        <StyledBorder />
      </section>
      <section className="bg-body">
        <div className="container grid md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="">
            <Image
              src={fryWithCream}
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
                Meat Bowl
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="mt-8 md:mt-16 w-fit mx-auto md:mx-0 md:mr-auto">
              <ul className="text-base sm:text-lg md:text-xl uppercase space-y-5 md:space-y-10 text-white ml-6 list-disc">
                <li>Grilled Chicken Bowl</li>
                <li>
                  Kebab Bowl <br />
                  <span className="text-sm text-gray-300 leading-[50px] mt-4 inline-block">
                    Flavorful, filling, and straight from the grill. <br />
                    Bowls built to satisfy your hunger and your taste
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <StyledBorder />
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-15 md:py-20">
          <div className="order-2 md:order-2">
            <div className="flex items-center gap-2 w-fit  mx-auto md:mx-0 md:mr-auto">
              <OrangeRectSkewIcon />
              <h1 className="font-bernier text-2xl md:text-3xl tracking-[8px] ml-1.5">
                Curries
              </h1>
              <OrangeRectSkewIcon />
            </div>
            <div className="mt-2 md:mt-16 text-center md:text-left">
              <ul className="text-base sm:text-lg md:text-xl uppercase space-y-5 md:space-y-10 text-white ml-6 list-disc">
                <li>chicken kebab karai</li>
                <li>
                  lahori beef <br />
                  <span className="text-sm text-gray-300 leading-[50px] mt-4 inline-block">
                    Flavorful, filling, and straight from the grill. <br />
                    Bowls built to satisfy your hunger and your taste
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={koraiKebab}
              width={500}
              height={700}
              alt="product"
              className="border-4 border-orange object-cover mx-auto md:ml-auto rounded-b-full md:rounded-full p-1 w-[80%] sm:w-[500px] md:h-[500px] lg:h-[680px]"
            />
          </div>
        </div>
      </section>
      <div className="flex items-center gap-8 justify-center mb-16">
        <Link
          href="/menu/noodlles-and-pasta"
          className="border border-black hover:bg-black/40 rounded-full p-1.5 "
        >
          <LeftArrow />
        </Link>
        <Link
          href="/menu/salad-and-kebab"
          className="border border-black hover:bg-black/40 rounded-full p-1.5"
        >
          <RightArrow />
        </Link>
      </div>
    </main>
  );
}

export default FishAndPlatters;

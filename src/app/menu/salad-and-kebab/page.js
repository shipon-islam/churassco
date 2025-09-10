import homeBanner from "@/assets/banners/home-banner.jpg";
import nakhshi from "@/assets/png/nakhshi.png";
import Hero from "@/components/Hero";
import FifthSection from "@/components/menu/FifthSection";
import FirstSection from "@/components/menu/FirstSection";
import ForthSection from "@/components/menu/ForthSection";
import SecondSection from "@/components/menu/SecondSection";
import ThirdSection from "@/components/menu/ThirdSection";
import StyledBorder from "@/components/StyledBorder";
import Image from "next/image";
function SaladAndKabab() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            Salad & Kebab
          </h1>
          <p className="text-sm mt-4 md:mt-10 uppercase traking-[17%] max-w-[600px] mx-auto">
            From crisp, refreshing salads to smoky, tender kebabs freshness and
            flavor come together on every plate
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
        <FirstSection />
        <SecondSection />
        <StyledBorder />
        <ThirdSection />
        <StyledBorder />
      </section>
      <section className="bg-body">
        <ForthSection />
        <StyledBorder />
        <FifthSection />
      </section>
    </main>
  );
}

export default SaladAndKabab;

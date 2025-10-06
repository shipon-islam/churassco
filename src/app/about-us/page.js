import homeBanner from "@/assets/banners/home-banner.jpg";
import OurFood from "@/components/about/OurFood";
import OurGoal from "@/components/about/OurGoal";
import OurGoalLeft from "@/components/about/OurGoalLeft";
import Hero from "@/components/Hero";
import UpComingEvents from "@/components/home/UpComingEvents";
import Image from "next/image";
export default function AboutUs() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            good time great taste
          </h1>
        </div>
      </Hero>
      <OurGoal />
      <OurFood />
      <OurGoalLeft />
      <UpComingEvents className="bg-body" />
      <div>
        <Image
          src="/images/menu/products/cheese.jpg"
          alt="banner"
          width={2500}
          height={550}
          className="max-h-[544px] object-cover"
        />
      </div>
    </main>
  );
}

import homeBanner from "@/assets/banners/home-banner.jpg";
import ButtonWithBorder from "@/components/ButtonWithBorder";
import Hero from "@/components/Hero";
import Memories from "@/components/home/Memories";
import SponsorSlide from "@/components/home/SponsorSlide";
import UpComingEvents from "@/components/home/UpComingEvents";
export default function Home() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            good time great taste
          </h1>
          <div className="mt-5 lg:hidden">
            <ButtonWithBorder name="Book a table" />
          </div>
        </div>
      </Hero>
      <section className="bg-body">
        <Memories />
        <SponsorSlide />
        <UpComingEvents />
      </section>
    </main>
  );
}

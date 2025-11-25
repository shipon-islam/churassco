import homeBanner from "@/assets/banners/home-banner.jpg";
import ButtonWithBorder from "@/components/ButtonWithBorder";
import Hero from "@/components/Hero";
import AudioPlayer from "@/components/home/AudioPlayer";
import BookTable from "@/components/home/BookTable";
import BusinessLayout from "@/components/home/BusinessLayout";
import ClientReviews from "@/components/home/ClientReviews";
import Memories from "@/components/home/Memories";
import ServiceSlider from "@/components/home/ServiceSlider";
import SponsorSlide from "@/components/home/SponsorSlide";
import UpComingEvents from "@/components/home/UpComingEvents";
import VideoBanner from "@/components/home/VideoBanner";
export default function Home() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            good time great taste
          </h1>
          <div className="mt-5 lg:hidden">
            <ButtonWithBorder
              name="Book a table"
              link={true}
              href="/book-table"
            />
          </div>
        </div>
      </Hero>
      <section className="bg-body relative">
        <Memories />
        <SponsorSlide />
        <div className="hidden md:block w-[1px] h-[1450px] lg:h-[2200px] xl:h-[2525px] bg-white/20 absolute z-[1] left-[35%] top-[0%] overflow-hidden ">
          <div className="relative h-full">
            <span className="w-[1px] h-20 inline-block rounded-10  bg-white/60 z-10 absolute animate-move"></span>
          </div>
        </div>
        <div className="hidden md:block w-[1px] h-[1450px] lg:h-[2200px] xl:h-[2525px] bg-white/20 absolute z-[1] right-[35%] top-[0%] overflow-hidden">
          <div className="relative h-full">
            <span className="w-[1px] h-20 inline-block rounded-10  bg-white/60 z-10 absolute animate-move2"></span>
          </div>
        </div>
      </section>
      <section className="bg-body">
        <UpComingEvents />
        <VideoBanner />
      </section>
      <section className="bg-body">
        <ServiceSlider />
        <BusinessLayout />
      </section>
      <section className="bg-body">
        <BookTable />
        <ClientReviews />
      </section>
      <AudioPlayer />
    </main>
  );
}

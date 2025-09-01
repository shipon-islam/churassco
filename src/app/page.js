import homeBanner from "@/assets/banners/home-banner.jpg";
import ButtonWithBorder from "@/components/ButtonWithBorder";
import Hero from "@/components/Hero";
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
            <ButtonWithBorder name="Book a table" />
          </div>
        </div>
      </Hero>
      <section className="bg-body">
        <Memories />
        <SponsorSlide />
        <UpComingEvents />
        <VideoBanner />
        <ServiceSlider />
        <BusinessLayout />
        <BookTable />
        <ClientReviews />
      </section>
    </main>
  );
}

import homeBanner from "@/assets/about/churassco-brand.webp";
import OurFood from "@/components/about/OurFood";
import OurGoal from "@/components/about/OurGoal";
import OurGoalLeft from "@/components/about/OurGoalLeft";
import Hero from "@/components/Hero";
import ClientReviews from "@/components/home/ClientReviews";
import UpComingEvents from "@/components/home/UpComingEvents";
export default function AboutUs() {
  return (
    <main>
      <Hero banner={homeBanner} className="mt-36"></Hero>
      <OurGoal />
      <OurFood />
      <section className="bg-body">
        <OurGoalLeft />
        <UpComingEvents />
      </section>

      <section className="my-8">
        <ClientReviews />
      </section>
    </main>
  );
}

import homeBanner from "@/assets/banners/home-banner.jpg";
import BookTableForm from "@/components/bookTable/BookTable";
import Hero from "@/components/Hero";
export default function BookTable() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            good time great taste
          </h1>
        </div>
      </Hero>
      <BookTableForm />
    </main>
  );
}

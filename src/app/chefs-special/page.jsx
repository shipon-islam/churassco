import homeBanner from "@/assets/banners/home-banner.jpg";
import churasscoHeritage from "@/assets/chefs-special/churassco-heritage.webp";
import specialPlates from "@/assets/chefs-special/special-plates.webp";
import Hero from "@/components/Hero";
import Image from "next/image";
export default async function ChefsSpecial() {
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            Chef's Special Platter
          </h1>
        </div>
      </Hero>
      <section className="bg-body">
        <div className="container py-10 md:py-16 text-center md:text-left">
          <h1 className="font-monthoers text-3xl lg:text-7xl  tracking-[0.2rem] md:tracking-[0.5rem] uppercase text-center text-orange">
            CHEF’s Special
          </h1>
          <div className="grid md:grid-cols-[1fr_1.2fr] items-center  gap-10 mt-6 md:mt-5 ">
            <div className="order-2 md:order-1 w-[85%] md:w-full mx-auto">
              <h5 className="text-2xl">
                Churrasco – Brazilian Flame-Grilled Perfection
              </h5>
              <p className="mt-10">
                Tender cuts of premium meat, marinated with a touch of coarse
                salt and grilled over an open flame for that smoky, charred
                flavor. Served fresh off the skewer and sliced at your table,
                this Brazilian barbecue classic delivers juicy bites bursting
                with authentic South American taste. Best enjoyed with our
                signature sides and house-made sauces.
              </p>
            </div>
            <div className="relative md:top-30 order-1 md:order-2 mt-6 md:mt-0">
              <Image
                src={churasscoHeritage}
                alt="chef special"
                width={400}
                height={600}
                className="w-[80%] md:w-full max-w-[374px] h-auto mx-auto  rounded-tl-[40%] rounded-br-[40%] object-cover hover:rounded-bl-[40%] hover:rounded-tr-[40%] hover:rounded-tl-[0%] hover:rounded-br-[0%] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark-brown">
        <div className="container pt-5 pb-16 md:pt-20 md:pb-20">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 mt-10 md:mt-16 ">
            <div className="">
              <Image
                src={specialPlates}
                alt="chef special"
                width={700}
                height={1000}
                className={`w-[80%] md:w-full max-w-[635px] max-h-[800px] h-auto  object-cover mx-auto border-8 border-orange p-2 md:p-2s rounded-br-[150px]`}
              />
            </div>
            <div className="md:mt-32 text-center md:text-left w-[90%] md:w-full mx-auto">
              <h5 className=" text-white font-monthoers text-3xl md:text-4xl">
                Experience Churrasco at Home
              </h5>
              <p className="mt-10 text-white text-base xs:text-lg md:text-xl">
                Experience the rich flavors of Brazilian barbecue in Khilgaon.
                Get flame-grilled, perfectly seasoned, and delivered fresh to
                your home.
              </p>
              <ul className="mt-8 ml-6 text-base xs:text-lg md:text-xl space-y-2 ">
                <li className="inline-flex items-center gap-2 ">
                  <span className="size-1.5 bg-current inline-block rounded-full"></span>
                  Authentic Brazilian-style barbecue
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="size-1.5 bg-current inline-block rounded-full"></span>
                  Grilled fresh over open flames
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="size-1.5 bg-current inline-block rounded-full"></span>
                  Seasoned with coarse salt for pure flavor
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="size-1.5 bg-current inline-block rounded-full"></span>
                  Delivered hot and ready to enjoy
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="size-1.5 bg-current inline-block rounded-full"></span>
                  Perfect for family meals or gatherings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

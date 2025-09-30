import homeBanner from "@/assets/banners/home-banner.jpg";
import Hero from "@/components/Hero";
import { chefsSpecial } from "@/constants/chefs-special";
import Image from "next/image";
export default async function ChefsSpecial({ params }) {
  const { slug } = await params;
  const pageContent = chefsSpecial.find((item) => item.slug === slug);
  return (
    <main>
      <Hero banner={homeBanner}>
        <div>
          <h1 className="font-monthoers text-2xl  md:text-3xl lg:text-7xl uppercase tracking-[0.2rem] md:tracking-[0.5rem]">
            good time great taste
          </h1>
        </div>
      </Hero>
      <section className="bg-body">
        <div className="container py-10 md:py-16 text-center md:text-left">
          <h1 className="font-monthoers text-3xl lg:text-7xl  tracking-[0.2rem] md:tracking-[0.5rem] uppercase text-center text-orange">
            {pageContent?.title}
          </h1>
          <div className="grid md:grid-cols-[1fr_1.2fr] items-center  gap-10 mt-6 md:mt-5 ">
            <div className="order-2 md:order-1 w-[85%] md:w-full mx-auto">
              <h5 className="text-2xl">{pageContent?.firstSection?.heading}</h5>
              <p className="mt-10">{pageContent?.firstSection?.description}</p>
            </div>
            <div className="relative md:top-30 order-1 md:order-2 mt-6 md:mt-0">
              <Image
                src={pageContent?.firstSection?.image}
                alt="chef special"
                width={400}
                height={600}
                className="w-[80%] md:w-full max-w-[374px] h-auto mx-auto  rounded-tl-[40%] rounded-br-[40%] object-cover"
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
                src={pageContent?.secondSection?.image}
                alt="chef special"
                width={700}
                height={1000}
                className={`w-[80%] md:w-full max-w-[635px] h-auto  object-cover mx-auto border-8 border-orange p-2 md:p-4 ${
                  pageContent.id === 2 ? "rounded-t-[50%]" : "rounded-br-[40%]"
                }`}
              />
            </div>
            <div className="md:mt-16 text-center md:text-left w-[90%] md:w-full mx-auto">
              <h5 className=" text-white font-monthoers text-3xl md:text-4xl">
                {pageContent?.secondSection?.heading}
              </h5>
              <p className="mt-10 text-white text-base xs:text-lg md:text-xl">
                {pageContent?.secondSection?.description}
              </p>{" "}
              <ul className="mt-8 text-base xs:text-lg md:text-xl space-y-2">
                {pageContent?.secondSection?.list?.map((item, index) => (
                  <li
                    key={index}
                    className="text-white flex items-center justify-center md:justify-start gap-2 w-f"
                  >
                    <span className="size-1 bg-white"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

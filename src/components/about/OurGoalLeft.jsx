import Image from "next/image";

export default function OurGoalLeft() {
  return (
    <div className="bg-body">
      <div className="container py-10 sm:py-14 md:py-20">
        <div className="lg:hidden">
          <h4 className="text-4xl font-bernier ">Our goals & history</h4>
          <p className="mt-5">
            Churrasco is a Brazilian term for barbecue, specifically referring
            to a method of grilling meat on skewers over an open fire. It is a
            popular cooking style in South America, particularly in Brazil,
            Uruguay, and Argentina. The meat, often seasoned with coarse salt,
            is cooked on skewers and sliced at the table. 
          </p>
          <div className="mt-8 mb-10">
            <h5>opening hours</h5>
            <p>
              Mon – thu: 10 am – 01 am
              <br />
              Fri – sun: 10 am – 020 am
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1.5fr] md:grid-cols-2 md:gap-x-4">
          <div className="flex flex-col">
            <div className="hidden lg:block max-w-[400px]">
              <h4 className="text-5xl font-bernier w-58">
                Our goals & history
              </h4>
              <p className="mt-8">
                Churrasco is a Brazilian term for barbecue, specifically
                referring to a method of grilling meat on skewers over an open
                fire. It is a popular cooking style in South America,
                particularly in Brazil, Uruguay, and Argentina. The meat, often
                seasoned with coarse salt, is cooked on skewers and sliced at
                the table. 
              </p>
              <div className="mt-8 mb-10">
                <h5>opening hours</h5>
                <p>
                  Mon – thu: 10 am – 01 am
                  <br />
                  Fri – sun: 10 am – 020 am
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-end md:justify-end h-full relative left-10 md:left-0 z-10">
              <Image
                src="/images/menu/products/cheese.jpg"
                width={310}
                height={524}
                alt="img"
                className="h-[190px] xxs:h-[220px] sm:h-[320px] md:h-fit object-cover border border-orange"
              />
              <h5 className="text-xl xxs:text-2xl md:text-4xl uppercase font-monthoers text-orange flex flex-col -rotate-10 absolute -bottom-5 xxs:bottom-5 md:-bottom-5 left-10 sm:left-30 md:left-10 xl:left-58 z-10 text-nowrap">
                <span>Every layout your</span>
                <span className="pl-5 inline-block">business may need</span>
              </h5>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/menu/products/cheese.jpg"
              width={600}
              height={1170}
              alt="img"
              className="w-full rounded-tl-[40%] rounded-br-[40%] h-[320px] xxs:h-[433px] sm:h-[700px] lg:h-[850px] xl:h-[950px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

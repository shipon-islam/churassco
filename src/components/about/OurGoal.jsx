import Image from "next/image";

export default function OurGoal() {
  return (
    <div className="bg-body">
      <div className="container grid grid-cols-2 gap-x-4 py-20">
        <div>
          <Image
            src="/images/menu/products/cheese.jpg"
            width={600}
            height={1170}
            alt="img"
            className="rounded-tr-[40%] rounded-bl-[40%]"
          />
        </div>
        <div className="text-right flex flex-col">
          <h4 className="text-5xl font-bernier w-58 ml-auto">
            Our goals & history
          </h4>
          <p className="mt-8">
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
          <div className="flex flex-col justify-end h-full relative">
            <Image
              src="/images/menu/products/cheese.jpg"
              width={310}
              height={524}
              alt="img"
              className="h-fit"
            />
            <h5 className="text-4xl uppercase font-monthoers text-orange flex flex-col -rotate-10 absolute -bottom-5 right-10 xl:right-58">
              <span>Every layout your</span>
              <span className="pl-5 inline-block">business may need</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

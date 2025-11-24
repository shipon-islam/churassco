import churasscoStory from "@/assets/about/churassco-story.jpg";
import Image from "next/image";
export default function OurFood() {
  return (
    <div className="bg-dark-brown">
      <div className="container py-20 flex flex-col md:flex-row justify-between gap-10 lg:gap-20 items-center">
        <div className="md:max-w-[250px] lg:max-w-[300px]">
          <h5 className="text-3xl lg:text-4xl xl:text-5xl uppercase">
            our food <br /> philosophy
          </h5>
          <p className="lg:text-lg mt-8">
            Churrasco is a Brazilian term for barbecue, specifically referring
            to a method of grilling meat on skewers over an open fire. It is a
            popular cooking style in South America, particularly in Brazil,
            Uruguay, and Argentina. The meat, often seasoned with coarse salt,
            is cooked on skewers and sliced at the table. 
          </p>
        </div>
        <div>
          <Image
            src={churasscoStory}
            alt="img"
            width={860}
            height={485}
            className="mt-10 w-full h-full  object-cover shadow-[0px_4px_15.3px_0px_#E8822D]"
          />
        </div>
      </div>
    </div>
  );
}

import EventCard from "../EventCard";

export default function UpComingEvents() {
  return (
    <div className="container py-10 md:py-16 lg:py-20 w-[85%] md:w-full">
      <div className="text-center max-w-[700px] mx-auto">
        <h5 className="font-monthoers text-2xl md:text-3xl lg:text-4xl text-orange">
          UPCOMING EVENTS
        </h5>
        <p className="font-helvetica sm:text-lg md:text-xl lg:text-2xl mt-4 lg:mt-8">
          Churrasco is a Brazilian term for barbecue, specifically referring to
          a method of grilling meat on skewers over an open fire. It is a
          popular cooking style in South America, particularly in Brazil,
          Uruguay, and Argentina. The meat, often seasoned with coarse salt, is
          cooked on skewers and sliced at the table. 
        </p>
      </div>
      <div className="mt-12 md:mt-14 lg:mt-20 grid grid-cols-1  md:grid-cols-3  md:gap-x-18 lg:gap-x-28 xl:gap-x-32 gap-y-15">
        <EventCard type="curve" />
        <div className="before:content-[''] before:block md:before:w-[2px] before:h-full before:absolute before:top-0  md:before:-right-9 lg:before:-right-14 xl:before:-right-16  relative before:bg-white after:content-[''] after:block md:after:w-[2px] after:h-full after:absolute after:top-0 md:after:-left-9 lg:after:-left-14 xl:after:-left-16  after:bg-white">
          <EventCard />
        </div>

        <EventCard type="curve" />
      </div>
    </div>
  );
}

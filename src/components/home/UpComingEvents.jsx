import EventCard from "../EventCard";

export default function UpComingEvents() {
  return (
    <section className="container my-10 md:my-16 lg:my-20">
      <div className="text-center">
        <h5 className="font-monthoers text-2xl text-orange">UPCOMING EVENTS</h5>
        <p className="font-helvetica mt-4">
          Churrasco is a Brazilian term for barbecue, specifically referring to
          a method of grilling meat on skewers over an open fire. It is a
          popular cooking style in South America, particularly in Brazil,
          Uruguay, and Argentina. The meat, often seasoned with coarse salt, is
          cooked on skewers and sliced at the table. 
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <EventCard type="curve" />
        <EventCard />
        <EventCard type="curve" />
      </div>
    </section>
  );
}

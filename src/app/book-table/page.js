import homeBanner from "@/assets/banners/home-banner.jpg";
import BookTableForm from "@/components/bookTable/BookTable";
import Hero from "@/components/Hero";
import Image from "next/image";
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
      <section className="bg-dark-brown text-white py-14 ">
        <div className="container">
          <h1 className="font-monthoers uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-orange text-center mb-14">
            how to find us
          </h1>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.288264695983!2d90.42268436949385!3d23.750692520605444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9001a1cefef%3A0x7eeb50d0082618e2!2sChurrasco!5e0!3m2!1sen!2sbd!4v1758627955465!5m2!1sen!2sbd"
              width="600"
              height="850"
              allowFullScreen=""
              className="border-0 w-full h-[500px] lg:h-[756px] xl:h-[850px] rounded-4xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="grid md:grid-cols-2 gap-10 py-14">
            <div className="max-w-[400px] mx-auto md:mx-0">
              <div className="mt-8 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl text-orange font-bernier ">
                  Road:
                </h3>
                <p className="text-xl sm:text-2xl mt-5">
                  566/C Khilgaon Taltola, Dhaka, Bangladesh
                </p>
              </div>
              <div className="mt-10 md:mt-32 text-center md:text-left">
                <h5 className="text-2xl sm:text-3xl text-orange font-bernier ">
                  Opening hours:
                </h5>
                <p className="text-xl sm:text-2xl mt-5 leading-[50px]">
                  Mon – Thu: 10.00 am – 01:00 am Fri – Sun: 10:00 am – 02:00 am
                </p>
              </div>
            </div>

            <Image
              src="/images/churassco-location.webp"
              width={500}
              height={700}
              alt="product"
              className=" object-cover lg:max-w-[418px] max-h-[500px] sm:max-h-[550px] md:max-h-[697px] h-auto rounded-tl-[40%] rounded-br-[40%] mx-auto md:ml-auto"
            />
          </div>
        </div>
        <h5 className="border border-orange w-fit  mx-auto mt-4 px-2 py-2 rounded-md sm:text-lg hover:bg-orange cursor-pointer duration-300 transition-colors">
          GET DIRECTION
        </h5>
      </section>
    </main>
  );
}

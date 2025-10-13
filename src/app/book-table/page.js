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
      <section className="bg-dark-brown text-white py-10 ">
        <div className="container grid md:grid-cols-[1.5fr_1fr] xl:grid-cols-2 gap-8">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.288264695983!2d90.42268436949385!3d23.750692520605444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9001a1cefef%3A0x7eeb50d0082618e2!2sChurrasco!5e0!3m2!1sen!2sbd!4v1758627955465!5m2!1sen!2sbd"
              width="600"
              height="850"
              allowFullScreen=""
              className="border-0 rounded-t-full w-full md:h-[756px] lg:h-[850px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <Image
              src="/images/menu/products/cheese.jpg"
              width={500}
              height={700}
              alt="product"
              className="hidden md:block object-cover lg:max-w-[418px] h-auto"
            />
            <div className="mt-8 text-center md:text-left">
              <p>566/C Khilgaon Taltola, Dhaka, Bangladesh</p>
              <div className="uppercase">
                <a href="mailto:reservations@example.com">
                  reservations@example.com
                </a>
                {", "}
                <a href="mailto:office@example.com">office@example.com</a>
              </div>
            </div>
            <div className="mt-10 text-center md:text-left">
              <h5>Opening hours:</h5>
              <p>
                Mon – Thu: 10.00 am – 01:00 am Fri – Sun: 10:00 am – 02:00 am
              </p>
              <h5 className="border border-orange w-fit  mx-auto mt-4 px-1 py-0.5 rounded-md text-sm block md:hidden">
                GET DIRECTION
              </h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

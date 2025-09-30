import Image from "next/image";

export default function Hero({ children, banner }) {
  return (
    <section className="relative">
      <Image
        src={banner}
        alt="Home Banner"
        className="min-h-[300px] max-h-[871px] flex items-center justify-center w-full"
      />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2  text-white text-center container">
        {children}
      </div>
    </section>
  );
}

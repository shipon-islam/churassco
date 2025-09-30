import churasscoLogo from "@/assets/logo/churassco-logo.png";
import Image from "next/image";
import { OrangeRectIcon } from "./SvgIcons";
export default function Footer() {
  return (
    <footer className="font-helvetica text-white p-8 container">
      {/* desktop version */}
      <div className="hidden lg:grid grid-cols-3 gap-8 ">
        <div className="grid place-content-center py-10 text-sm">
          <h4 className="text-xl uppercase mb-4">contact us</h4>
          <p>
            TEL: <a href="tel:01855-557586">01855-557586</a>
          </p>
          <p>
            EMAIL:{" "}
            <a href="mailto:churrascokhilgaon@gmail.com">
              churrascokhilgaon@gmail.com
            </a>
          </p>
        </div>
        <div className="border-x-1 border-gray-200  grid place-content-center py-10 text-sm">
          <h4 className="text-xl uppercase mb-4">Address</h4>
          <p>PO: 566/C Khilgaon Taltola</p>
          <p>LOCAL: Dhaka, Bangladesh</p>
        </div>
        <div className="grid place-content-center py-10 text-sm">
          <h4 className="text-xl uppercase mb-4">OPENNING HOURS</h4>
          <p> EVERYDAY: 7AM to 10PM</p>
          <p>KITCHEN CLOSES: 7AM to 10PM</p>
        </div>
      </div>
      {/* mobile version */}
      <div className="lg:hidden">
        <div className="text-center">
          <h4 className="text-2xl uppercase mb-4">contact</h4>
          <div>
            <p>01855-557586</p>
            <p>churrascokhilgaon@gmail.com</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <h4 className="text-2xl uppercase mb-4">address</h4>
          <p>566/C Khilgaon Taltola, Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="mt-14 relative border-orange border-t-2">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={churasscoLogo}
            alt="Logo"
            width={350}
            height={94}
            className="w-full h-full max-w-[255px] max-h-[94px] bg-brown"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 sm:mt-14 md:mt-16 text-xs">
        <div className="flex justify-center gap-3">
          <a
            className="flex items-center gap-1 font-normal text-gray-300 group"
            href="#"
          >
            <OrangeRectIcon />{" "}
            <span className="group-hover:underline group-hover:text-orange">
              FACEBOOK
            </span>
          </a>
          <a
            className="flex items-center gap-1 font-normal text-gray-300 group"
            href="#"
          >
            <OrangeRectIcon />{" "}
            <span className="group-hover:underline group-hover:text-orange">
              INSTAGRAM
            </span>
          </a>
        </div>
        <div className="flex justify-center gap-3 mt-3 lg:mt-0">
          <a
            className="flex items-center gap-1 font-normal text-gray-300 group"
            href="#"
          >
            <OrangeRectIcon />{" "}
            <span className="group-hover:underline group-hover:text-orange">
              PATHAO
            </span>
          </a>
          <a
            className="flex items-center gap-1 font-normal text-gray-300 group"
            href="#"
          >
            <OrangeRectIcon />{" "}
            <span className="group-hover:underline group-hover:text-orange">
              FOODPANDA
            </span>
          </a>
          <a
            className="flex items-center gap-1 font-normal text-gray-300 group"
            href="#"
          >
            <OrangeRectIcon />{" "}
            <span className="group-hover:underline group-hover:text-orange">
              FOODIE
            </span>
          </a>
        </div>
      </div>
      <p className="mt-24 text-center text-xs text-gray-300">
        POWERED by{" "}
        <a
          href="https://awtomatig.com/"
          className="hover:underline hover:text-orange"
          target="_blank"
        >
          {" "}
          AWTOMATIG
        </a>
      </p>
    </footer>
  );
}

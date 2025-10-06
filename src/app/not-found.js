import NotFoundPng from "@/assets/png/404-notfound.png";
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container">
      <div className="h-screen grid place-items-center">
        <div>
          <Image src={NotFoundPng} width={500} height={500} alt="not-found" />
          <h5 className="font-bernier text-xl text-center">
            the page you are looking for does not exist or has been remove{" "}
          </h5>
          <Link
            className="bg-golden px-5 py-2 uppercase rounded-md mx-auto w-fit block mt-5 hover:bg-white hover:text-golden"
            href="/"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

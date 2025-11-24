"use client";
import NotFoundPng from "@/assets/png/404-notfound.png";
import { UseHeader } from "@/context/HeaderContextProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
export default function NotFound() {
  const { setIsShowHeader } = UseHeader();
  useEffect(() => {
    setIsShowHeader(false);
    return () => setIsShowHeader(true);
  }, [setIsShowHeader]);
  return (
    <div className="container bg-body">
      <div className="h-screen grid place-items-center">
        <div className="shadow-[-2px_5px_41.5px_4px_#E8822D] p-10 rounded-md flex flex-col items-center gap-5">
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

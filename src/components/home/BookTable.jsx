"use client";
import insideResturaunt from "@/assets/home/inside-resturaunt.webp";

import Image from "next/image";
import { useState } from "react";
import DatePicker from "../DatePicker";
import TransparentButton from "../TransparentButton";

export default function BookTable() {
  const [selectedDate, setSelectedDate] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  return (
    <div className="container mt-8">
      <div className="bg-dark-brown grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-5 p-5 md:p-10 lg:p-20 ">
        <div className="order-1 md:order-0">
          <h1 className="text-orange lowercase font-bernier text-7xl hidden md:block">
            RESERVE
          </h1>
          <h5 className="text-3xl uppercase mt-8 text-center md:text-left">
            book a table
          </h5>
          <p className="mt-4 mb-8 text-center md:text-left">
            *reservations recommended
          </p>
          <form action="#" className="flex flex-col gap-8">
            <input
              placeholder="Enter number of people"
              className={`border-b border-white/40  bg-transparent py-4 focus:outline-none focus:border-white ${
                isCustom ? "block" : "hidden"
              }`}
            />
            <select
              onChange={(e) => {
                if (e.target.value === "custom") {
                  setIsCustom(true);
                } else {
                  setIsCustom(false);
                }
              }}
              className={`border-b border-white/40  bg-transparent py-4 focus:outline-none ${
                isCustom ? "hidden" : "block"
              }`}
            >
              <option className="text-black" value="1">
                1 Person
              </option>
              <option className="text-black" value="2">
                2 Person
              </option>
              <option className="text-black" value="3">
                3 Person
              </option>
              <option className="text-black" value="4">
                4 Person
              </option>
              <option className="text-black" value="custom">
                Custom
              </option>
            </select>

            <DatePicker value={selectedDate} onChange={setSelectedDate} />
            <select className="border-b border-white/40  bg-transparent py-4 focus:outline-none">
              <option className="text-black" value="11:00am">
                11:00 am
              </option>
              <option className="text-black" value="12:00pm">
                12:00 pm
              </option>
              <option className="text-black" value="01:00pm">
                01:00 pm
              </option>
              <option className="text-black" value="02:00pm">
                02:00 pm
              </option>
              <option className="text-black" value="03:00pm">
                03:00 pm
              </option>
            </select>
            <TransparentButton name="Book now" className="w-fit mt-8" />
          </form>
        </div>
        <div className="relative ">
          <div className="w-fit max-w-[180px] h-[250px] md:max-w-[400px] md:h-[627px] mx-auto md:ml-auto  my-5 md:my-0">
            <Image
              src={insideResturaunt}
              width={600}
              height={400}
              alt="table-book"
              className="w-full h-full object-cover rounded-tl-[40%] rounded-br-[40%] hover:rounded-bl-[40%] hover:rounded-tr-[40%] hover:rounded-tl-[0%] hover:rounded-br-[0%] transition-all duration-300"
            />
          </div>
          <div className="font-island text-lg md:text-5xl text-orange -rotate-12 absolute bottom-10 md:bottom-0 left-[60%] md:left-[5%]">
            <h5>
              Book private dining <br />& banquet rooms
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

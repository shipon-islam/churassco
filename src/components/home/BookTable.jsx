"use client";
import serviceImage from "@/assets/cards/curry.jpg";

import Image from "next/image";
import { useState } from "react";
import DatePicker from "../DatePicker";
import TransparentButton from "../TransparentButton";

export default function BookTable() {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div className="container mt-8">
      <div className="bg-dark-brown grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-5 p-5 md:p-10 lg:p-20 ">
        <div>
          <h1 className="text-orange lowercase font-bernier text-7xl">
            RESERVE
          </h1>
          <h5 className="text-3xl uppercase mt-8">book a table</h5>
          <p className="mt-4 mb-8">*reservations recommended</p>
          <form action="#" className="flex flex-col gap-8">
            <select className="border-b border-white/40  bg-transparent py-4 focus:outline-none">
              <option className="text-black" value="1">
                1 person
              </option>
              <option className="text-black" value="2">
                2 person
              </option>
              <option className="text-black" value="3">
                3 person
              </option>
              <option className="text-black" value="4">
                4 person
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
        <div className="relative">
          <div className="max-w-[400px] h-[627px] ml-auto  ">
            <Image
              src={serviceImage}
              width={600}
              height={400}
              alt="table-book"
              className="w-full h-full object-cover rounded-tl-[40%] rounded-br-[40%]"
            />
          </div>
          <div className="font-island text-5xl text-orange -rotate-12 absolute bottom-0 left-[20%]">
            <h5>
              Book private dining <br />& banquet rooms
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

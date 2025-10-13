"use client";
import { useState } from "react";
import DatePicker from "../DatePicker";
import TransparentButton from "../TransparentButton";

export default function BookTable() {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div className="bg-body">
      <div className="container py-20">
        <h1 className="text-orange font-monthoers uppercase text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center pb-8">
          book a table
        </h1>

        <form action="#" className="grid sm:grid-cols-4 gap-8 items-end">
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
          <TransparentButton
            name="Book now"
            className="w-fit ml-auto sm:mr-auto mt-8"
          />
        </form>
      </div>
    </div>
  );
}

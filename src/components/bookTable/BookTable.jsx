"use client";
import { useState } from "react";
import DatePicker from "../DatePicker";
import TransparentButton from "../TransparentButton";

export default function BookTable() {
  const [selectedDate, setSelectedDate] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  return (
    <div className="bg-body">
      <div className="container py-20">
        <h1 className="text-orange font-monthoers uppercase text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center pb-20">
          book a table
        </h1>

        <form action="#">
          <div className="grid sm:grid-cols-3 gap-8 justify-center items-end">
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
            <input
              placeholder="Enter number of people"
              className={`border-b border-white/40  bg-transparent py-4 focus:outline-none focus:border-white ${
                isCustom ? "block" : "hidden"
              }`}
            />
            <DatePicker value={selectedDate} onChange={setSelectedDate} />
            <select className="border-b border-white/40  bg-transparent py-4 focus:outline-none focus:border-white">
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
          </div>
          <TransparentButton
            name="Book now"
            className="w-fit mx-auto block mt-20"
          />
        </form>
      </div>
    </div>
  );
}

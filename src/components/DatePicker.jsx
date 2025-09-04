"use client";
import "pikaday/css/pikaday.css";
import { useEffect, useRef } from "react";

const DatePicker = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    let picker;

    (async () => {
      const Pikaday = (await import("pikaday")).default; // load dynamically
      picker = new Pikaday({
        field: inputRef.current,
        format: "YYYY-MM-DD",
        onSelect: (date) => {
          onChange(date.toISOString().split("T")[0]);
        },
      });
    })();

    return () => {
      if (picker) picker.destroy();
    };
  }, [onChange]);

  return (
    <div className="relative">
      <input
        type="text"
        ref={inputRef}
        defaultValue={value}
        placeholder="Select a date"
        className="border-b rounded px-1 py-2 w-full focus:outline-none placeholder:text-white"
      />
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        stroke="white"
        fill="none"
        strokeWidth="2"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
};

export default DatePicker;

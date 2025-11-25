import resturant from "@/assets/cards/resturant-inside.jpg";
import Image from "next/image";
export default function EventCard({ type }) {
  return (
    <div>
      <Image
        src={resturant}
        width={340}
        height={100}
        alt="curve-card"
        className={`w-full h-auto  ${
          type === "curve" ? "rounded-tl-[50%] rounded-br-[50%]" : ""
        } ${type === "curve-left" ? "rounded-tr-[50%] rounded-bl-[50%]" : ""}`}
      />
      <div className="text-center mt-4">
        <h4 className="text-2xl font-bernier lowercase">COCKTAILS NIGHT</h4>
        <h5 className="text-lg">Friday, 21 Nov</h5>
        <p className="text-lg">Reservations 12Pm To 1.30Pm</p>
      </div>
    </div>
  );
}

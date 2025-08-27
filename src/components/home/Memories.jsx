import curryDish from "@/assets/cards/curry.jpg";
import resturantInside from "@/assets/cards/resturant-inside.jpg";
import HalfFlower from "@/assets/png/half-flower.png";
import Image from "next/image";
import TransparentButton from "../TransparentButton";
export default function Memories() {
  return (
    <section className="bg-body min-h-screen">
      <div className="container">
        <div className="w-fit mx-auto text-center pt-10 lg:pt-20">
          <Image
            src={HalfFlower}
            alt="Memories"
            width={223}
            height={107}
            className="mx-auto"
          />
          <h2 className="font-bernier text-4xl lowercase text-orange py-5">
            CHURRASCO IS FOR EVERYONE TO ENJOY A BEAUTIFUL MOMENT
          </h2>
          <h5 className="font-island text-5xl">For the best memories</h5>
        </div>
        <div className="lg:hidden">
          <h3 className="text-orange text-center font-monthoers text-4xl">
            CHEF’S SELECTION
          </h3>
          <h4 className="font-bernier lowercase text-4xl mt-7 mb-2.5">
            Only the Finest Cuts & Flavors
          </h4>
        </div>
        <div className="grid grid-cols-[1fr_30rem] lg:grid-cols-[1fr_30rem] xl:grid-cols-[1fr_60rem]">
          <div>
            <h3 className="text-orange font-monthoers  text-4xl hidden lg:block">
              CHEF’S SELECTION
            </h3>
            <h4 className="font-bernier lowercase text-4xl mt-7 mb-2.5 hidden lg:block">
              Only the Finest Cuts & Flavors
            </h4>
            <p className="mb-28">
              At Churrasco, we honor Brazilian barbecue, skewered meats
              flame-grilled, carved at your table, and served with fresh sides
              and warm hospitality.
            </p>
            <TransparentButton name="Read More" />
          </div>

          <div>
            <div className="relative">
              <Image
                src={resturantInside}
                alt="Memories"
                width={577}
                height={1002}
                className="ml-auto border-1  border-white"
              />
              <div className="absolute bottom-1/2 left-[23.1%] translate-y-1/2 border-1  border-white rotate-45">
                <Image
                  src={curryDish}
                  alt="Memories"
                  width={320}
                  height={320}
                  className="w-[320px] h-[320px] object-cover rotate-90 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

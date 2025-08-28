import curryDish from "@/assets/cards/curry.jpg";
import resturantInside from "@/assets/cards/resturant-inside.jpg";
import HalfFlower from "@/assets/png/half-flower.png";
import Image from "next/image";
import TransparentButton from "../TransparentButton";
export default function Memories() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <div className="w-fit mx-auto text-center pt-10 lg:pt-20">
          <Image
            src={HalfFlower}
            alt="Memories"
            width={223}
            height={107}
            className="mx-auto w-[71px] lg:w-[223px] h-auto"
          />
          <h2 className="font-bernier text-2xl  lg:text-4xl lowercase text-orange pb-2 pt-2">
            CHURRASCO IS FOR EVERYONE TO ENJOY A BEAUTIFUL MOMENT
          </h2>
          <h5 className="font-island text-4xl md:text-5xl">
            For the best memories
          </h5>
        </div>
        <div className="lg:hidden mt-8">
          <h3 className="text-orange text-center font-monthoers text-3xl lg:text-4xl">
            CHEF’S SELECTION
          </h3>
          <h4 className="font-bernier lowercase text-3xl lg:text-4xl mt-4 mb-2.5">
            Only the Finest Cuts & Flavors
          </h4>
        </div>
        <div className="grid grid-cols-[7rem_1fr] xxs:grid-cols-[8rem_1fr] gap-2 mt-8">
          <div>
            <h3 className="text-orange font-monthoers  text-4xl hidden lg:block">
              CHEF’S SELECTION
            </h3>
            <h4 className="font-bernier lowercase text-4xl mt-7 mb-2.5 hidden lg:block">
              Only the Finest Cuts & Flavors
            </h4>
            <p className=" mb-8 lg:mb-28 text-[15px] xxs:text-base leading-5  lg:leading-8">
              At Churrasco, we honor Brazilian barbecue, skewered meats
              flame-grilled, carved at your table, and served with fresh sides
              and warm hospitality.
            </p>
            <TransparentButton name="Read More" />
          </div>

          <div>
            <div className="relative w-fit ml-auto">
              <Image
                src={resturantInside}
                alt="Memories"
                width={577}
                height={1002}
                className="w-[130px] h-[280px]  xxs: xxs:w-[175px] xxs:h-[304px] ml-auto border-1  border-white"
              />
              <div className="absolute bottom-1/2 left-[-44px] translate-y-1/2 border-1  border-white rotate-45">
                <Image
                  src={curryDish}
                  alt="Memories"
                  width={320}
                  height={320}
                  className="size-[85px] lg:size-[320px] object-cover rotate-90 "
                />
              </div>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="lg:hidden mt-16">
          <h3 className="text-orange text-center font-monthoers text-3xl lg:text-4xl">
            CHEF’S SELECTION
          </h3>
          <h4 className="font-bernier lowercase text-3xl lg:text-4xl mt-4 mb-2.5">
            ONLY THE FINEST FOOD & GREAT SERVICE
          </h4>
        </div>
        <div className="grid grid-cols-[1fr_9rem] xxs:grid-cols-[1fr_9rem] mt-8 gap-2">
          <div>
            <div className="relative w-fit mr-auto">
              <Image
                src={resturantInside}
                alt="Memories"
                width={577}
                height={1002}
                className="w-[120px] h-[260px]  xxs: xxs:w-[175px] xxs:h-[304px] mr-auto border-1  border-white"
              />
              <div className="absolute bottom-1/2 right-[-44px] translate-y-1/2 border-1  border-white ">
                <Image
                  src={curryDish}
                  alt="Memories"
                  width={105}
                  height={166}
                  className="w-[100px] h-[155px] object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-orange font-monthoers  text-4xl hidden lg:block">
              CHEF’S SELECTION
            </h3>
            <h4 className="font-bernier lowercase text-4xl mt-7 mb-2.5 hidden lg:block">
              Only the Finest Cuts & Flavors
            </h4>
            <p className=" mb-8 lg:mb-28 text-[15px] xxs:text-base leading-5  lg:leading-8 text-right">
              At Churrasco, we honor Brazilian barbecue, skewered meats
              flame-grilled, carved at your table, and served with fresh sides
              and warm hospitality.
            </p>
            <TransparentButton
              name="Read More"
              className="ml-auto w-fit block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

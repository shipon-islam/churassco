import { OrangeRectIcon } from "./SvgIcons";

export default function StyledBorder() {
  return (
    <div className="border-b-1 border-orange container relative hidden md:block">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-brown p-0.5">
        <OrangeRectIcon />
      </div>
    </div>
  );
}

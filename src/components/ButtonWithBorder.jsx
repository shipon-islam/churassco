import Link from "next/link";

export default function ButtonWithBorder({ name, className, link, ...rest }) {
  if (link) {
    return (
      <div className="border-golden border-3 inline-block py-1 px-0.5">
        <Link
          {...rest}
          className={`border-1 text-white border-golden  font-semibold px-8 py-1.5 uppercase text-sm cursor-pointer hover:bg-golden hover:text-brown transition-colors duration-300 text-nowrap font-helvetica ${className}`}
        >
          {name}
        </Link>
      </div>
    );
  }
  return (
    <div className="border-golden border-3 inline-block py-1 px-0.5">
      <button
        {...rest}
        className={`border-1 text-white border-golden  font-semibold px-8 py-1.5 uppercase text-sm cursor-pointer hover:bg-golden hover:text-brown transition-colors duration-300 text-nowrap font-helvetica ${className}`}
      >
        {name}
      </button>
    </div>
  );
}

export default function TransparentButton({ name, className, ...rest }) {
  return (
    <button
      {...rest}
      className={`border-1 text-white border-golden  font-semibold px-3 sm:px-6 lg:px-8 py-3 uppercase text-sm cursor-pointer hover:bg-golden hover:text-brown transition-colors duration-300 text-nowrap font-helvetica ${className}`}
    >
      {name}
    </button>
  );
}

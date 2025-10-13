"use client";
import churasscoLogo from "@/assets/logo/churassco-logo.png";
import spoonLogo from "@/assets/logo/spoon.png";
import { HeaderLinks, HeaderLinksMobile } from "@/constants/header_data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonWithBorder from "./ButtonWithBorder";
import {
  DownArrowIcon,
  LeftArrowIcon,
  MenuIcon,
  MenuRectIcon,
} from "./SvgIcons";
export default function Header() {
  const [navLinks, setNavLinks] = useState(HeaderLinks);
  const [navLinksMobile, setNavLinksMobile] = useState(HeaderLinksMobile);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const handleToggle = (id) => {
    const updatedLinks = navLinks.map((link) =>
      link.id === id
        ? { ...link, isDropdown: !link.isDropdown }
        : { ...link, isDropdown: false }
    );
    setNavLinks(updatedLinks);
  };

  const handleToggleMobile = (id) => {
    const updatedLinks = navLinksMobile.map((link) =>
      link.id === id ? { ...link, isDropdown: !link.isDropdown } : link
    );
    setNavLinksMobile(updatedLinks);
  };
  return (
    <header className="fixed top-0 left-0 w-full  z-50">
      {/* desktop version */}
      <nav className="relative hidden lg:block ">
        <div className="relative bg-brown py-2 ">
          <div className="container">
            <Link href="/">
              <Image src={spoonLogo} alt="spoon-logo" width={63} height={62} />
            </Link>
            <Link
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block"
            >
              <Image
                src={churasscoLogo}
                alt="Logo"
                width={350}
                height={94}
                className="w-full h-full max-w-[300px] max-h-[94px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center container">
          <ul
            className={`mt-2 w-full flex p-8 text-white relative container space-x-5 lg:space-x-6 `}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <div className="flex items-center gap-2 uppercase ">
                  <MenuRectIcon />

                  {link?.dropdownItems?.length > 0 ? (
                    <button
                      onClick={() => handleToggle(link.id)}
                      className="cursor-pointer uppercase border-b-1 border-transparent hover:border-white hover:text-gray-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      onClick={() => handleToggle(link.id)}
                      className="border-b-1 border-transparent hover:border-white hover:text-gray-300"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
                {link?.isDropdown && link?.dropdownItems?.length > 0 && (
                  <ul className="flex gap-8 container !w-full 2xl:!w-fit left-0 top-20 rsight-0 absolute  bg-dark-brown p-4 space-y-2 rounded-md">
                    {link.dropdownItems.map((item) => (
                      <li
                        key={item.id}
                        className="mt-4 flex flex-col items-center text-center xl:text-xl"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={198}
                          height={198}
                          className="md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] w-[198px] h-[198px] object-cover mb-2 rounded-full border-4 border-orange"
                        />
                        <Link
                          onClick={() => handleToggle(link.id)}
                          className="hover:text-gray-300"
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ButtonWithBorder
            name="Book a table"
            link={true}
            href="/book-table"
          />
        </div>
      </nav>
      {/* mobile version */}
      <nav className="relative flex items-center justify-end px-4 py-8 lg:hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={churasscoLogo}
            alt="Logo"
            width={350}
            height={94}
            className="w-[150px] md:w-[250px] h-auto"
          />
        </div>
        <button
          className="cursor-pointer "
          onClick={() => setIsMenuShown((prev) => !prev)}
        >
          <MenuIcon />
        </button>

        <ul
          className={`bg-[linear-gradient(180deg,_#E8822D_25.96%,_#8A3324_98.56%)] absolute top-16 right-0 mt-2 w-full h-[90vh]  p-8 text-white space-y-6 transition-transform duration-300 ${
            isMenuShown ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinksMobile.map((link) => (
            <li key={link.id}>
              <div className="flex items-center justify-between gap-2 uppercase  font-medium text-3xl">
                <div
                  className={
                    link?.dropdownItems?.length > 0 ? "visible" : "invisible"
                  }
                >
                  {link.isDropdown ? <DownArrowIcon /> : <LeftArrowIcon />}
                </div>

                {link?.dropdownItems?.length > 0 ? (
                  <button
                    onClick={() => handleToggleMobile(link.id)}
                    className="cursor-pointer uppercase"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    onClick={() => setIsMenuShown((prev) => !prev)}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
              {link?.isDropdown && link?.dropdownItems?.length > 0 && (
                <ul>
                  {link.dropdownItems.map((item) => (
                    <li key={item.id} className="mt-4 text-right text-xl">
                      <Link
                        onClick={() => setIsMenuShown((prev) => !prev)}
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

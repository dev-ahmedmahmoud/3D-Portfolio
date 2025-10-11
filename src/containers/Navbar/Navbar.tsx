"use client";

import { useEffect, useState, memo } from "react";
import { Image, LanguageSwitch } from "@/components";
import { Link } from "@/i18n/routing";
import { logo, menu, close } from "../../assets";
import { useContent } from "@/hooks";
import type { INavbarContent, INavbarItem } from "@/hooks";

const Navbar = memo(() => {
  const navbarContent = useContent("navbar")() as INavbarContent;

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languageSwitchNode = (
    <li key={"nav-lang-switch"}>
      <LanguageSwitch />
    </li>
  );

  return (
    <nav
      className={`padding-x w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            tailWindWidth={"w-9"}
            tailWindHeight={"h-9"}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Ahmed &nbsp;
            <span className="md:block hidden"> | {navbarContent.headline}</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navbarContent?.items?.map((nav: INavbarItem) => (
            <li
              key={`nav-${nav.name}`}
              className={`${
                active === nav.link ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.link)}
            >
              <a href={`#${nav.link}`}>{nav.name}</a>
            </li>
          ))}
          {languageSwitchNode}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            tailWindWidth={"w-[28px]"}
            tailWindHeight={"h-[28px]"}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navbarContent?.items?.map((nav: INavbarItem) => (
                <li
                  key={`nav-${nav.name}`}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.link ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.link);
                  }}
                >
                  <a href={`#${nav.link}`}>{nav.name}</a>
                </li>
              ))}
              {languageSwitchNode}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="w-[1278px] max-w-full h-20 p-6 my-0 mx-auto sticky top-0 z-30 backdrop-blur-sm flex flex-row items-center justify-between">
      <Link href="/#top" className="inline-block" scroll={false}>
        <FontAwesomeIcon
          icon={faCode}
          className="text-[#191c1d] dark:text-[#ecedee] "
          width="30px"
          height="30px"
        />
      </Link>
      <ul className="text-[#9ba1a6] flex flex-row items-center gap-5 hover:cursor-pointer">
        <li className="transition ease-in-out delay-100 text-[#687076] hover:text-[#191c1d] dark:hover:text-[#e9ffff] duration-150 hover:after:content-[''] after:w-[0px] hover:after:h-[2px] hover:after:w-full hover:after:block hover:after:bg-[#e9ffff] after:transition after:ease-in-out after:delay-100">
          <Link href="/#projects" className="inline-block" scroll={false}>
            Projects
          </Link>
        </li>
        <li className="transition ease-in-out delay-100 text-[#687076] hover:text-[#191c1d] dark:hover:text-[#e9ffff] duration-150 hover:after:content-[''] after:w-[0px] hover:after:h-[2px] hover:after:w-full hover:after:block hover:after:bg-[#e9ffff] after:transition after:ease-in-out after:delay-100">
          <Link href="/#experience" className="inline-block" scroll={false}>
            Experience
          </Link>
        </li>
        <li className="transition ease-in-out delay-100 text-[#687076] hover:text-[#191c1d] dark:hover:text-[#e9ffff] duration-150 hover:after:content-[''] after:w-[0px] hover:after:h-[2px] hover:after:w-full hover:after:block hover:after:bg-[#e9ffff] after:transition after:ease-in-out after:delay-100">
          <Link href="/#contact" className="inline-block" scroll={false}>
            Contact
          </Link>
        </li>
        <li className="transition ease-in-out delay-100 text-[#687076] hover:text-[#191c1d] dark:hover:text-[#e9ffff] duration-150 hover:after:content-[''] after:w-[0px] hover:after:h-[2px] hover:after:w-full hover:after:block hover:after:bg-[#e9ffff] after:transition after:ease-in-out after:delay-100">
          <Link href="/blog" className="inline-block">
            Blog
          </Link>
        </li>
        <li className="transition ease-in-out delay-100 text-[#687076] hover:text-[#191c1d] dark:hover:text-[#e9ffff] duration-150 hover:after:content-[''] after:w-[0px] hover:after:h-[2px] hover:after:w-full hover:after:block hover:after:bg-[#e9ffff] after:transition after:ease-in-out after:delay-100">
          <Link href="https://github.com/Rafly-Ananda" className="inline-block">
            Github
          </Link>
        </li>
        <li className="transition ease-in-out delay-100 text-[#687076] hover:text-[#191c1d] dark:hover:text-[#e9ffff] duration-150 hover:after:content-[''] after:w-[0px] hover:after:h-[2px] hover:after:w-full hover:after:block hover:after:bg-[#e9ffff] after:transition after:ease-in-out after:delay-100">
          <Link
            href="https://www.instagram.com/rflyanandas/"
            className="inline-block"
          >
            Instagram
          </Link>
        </li>

        <li
          onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        >
          {currentTheme === "dark" ? (
            <FontAwesomeIcon
              icon={faMoon}
              className="transition ease-in-out delay-100 text-[#687076] hover:text-[#191c1d] dark:hover:text-[#e9ffff] duration-150"
              width="20px"
              height="20px"
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className="transition ease-in-out delay-100 text-[#687076] hover:text-[#191c1d] dark:hover:text-[#e9ffff] duration-150"
              width="20px"
              height="20px"
            />
          )}
        </li>
      </ul>
    </nav>
  );
}

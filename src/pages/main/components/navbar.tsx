import React, { useState } from "react";
import { changeLanguage } from "i18next";
import cx from "classnames";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState(
    localStorage.getItem("i18nextLng") || "UZ",
  );

  const changeLang = (lang: string) => {
    changeLanguage(lang);
    setActiveLang(lang);
  };
  const changBackground = () => {
    setScrolled(window.scrollY >= 80 ? true : false);
  };

  window.addEventListener("scroll", changBackground);

  return (
    <div
      className={cx(
        "fixed z-10 flex w-full justify-center transition-all",
        scrolled && "bg-main",
      )}
    >
      <nav className="flex w-full max-w-1200 items-center justify-between px-3 py-4 ">
        <img src="/assets/logo.svg" className="w-[120px]" alt="" />
        <div className="flex gap-4">
          <a
            href="#location"
            className="hover:tex flex h-[43px] w-[43px] cursor-pointer items-center justify-center rounded-md bg-white text-main transition-all hover:bg-gray-100"
          >
            <img className="w-[18px]" src="/assets/location.svg" alt="" />
          </a>
          <div
            onClick={() => changeLang(`${activeLang == "UZ" ? "RU" : "UZ"}`)}
            className="flex h-[43px] w-[43px] cursor-pointer items-center justify-center rounded-md bg-white text-main transition-all hover:bg-gray-100"
          >
            {activeLang}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

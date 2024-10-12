import { useState } from "react";
import cx from "classnames";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";

const Planirovka: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState(0);
  const btns = [
    "planirovka.room1",
    "planirovka.room2",
    "planirovka.room3",
    "planirovka.room4",
  ];

  const sizes = ["46.78", "58.14", "87.84", "116.81"];

  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-1200 justify-start gap-5 px-3 py-20 max-md:flex-col">
        <div className="flex w-full flex-col justify-between gap-10">
          <h1 className="text-5xl text-main">{t("planirovka.title")}</h1>

          <b className="text-center text-7xl text-main max-sm:text-5xl">
            {t(`planirovka.room${activeRoom + 1}`)} <br /> {sizes[activeRoom]}
            <sup>2</sup>
          </b>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center gap-3">
              {btns.map((content, index) => (
                <button
                  key={index}
                  onClick={() => setActiveRoom(index)}
                  className={cx(
                    "w-full rounded-full border-2 border-main px-3 py-2 text-lg transition-all max-sm:text-sm",
                    index == activeRoom &&
                      "w-[200%] bg-main text-white outline outline-4 outline-green-200",
                  )}
                >
                  {t(content)}
                </button>
              ))}
            </div>
            <a
              href="tel:+998555049999"
              className="btn btn-group flex items-center rounded-full bg-phone p-3 text-white max-md:hidden"
            >
              <p className="w-full text-center text-xl">Batafsil ma'lumot</p>
              <div className="rounded-full bg-white bg-opacity-40 p-3">
                <img className="w-6" src="/assets/phone.svg" alt="" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <img
            className="w-[100%] rounded-3xl max-md:w-full"
            src={`/assets/${activeRoom + 1}-xona.png`}
            alt=""
          />
          <a className="btn btn-group hidden items-center rounded-full bg-phone p-3 text-white max-md:flex">
            <p className="w-full text-center text-xl">Batafsil ma'lumot</p>
            <div className="rounded-full bg-white bg-opacity-40 p-3">
              <img className="w-6" src="/assets/phone.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Planirovka;

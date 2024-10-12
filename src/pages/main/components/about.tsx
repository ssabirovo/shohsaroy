import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  const scores1 = [
    {
      img: "/assets/camera.svg",
      content: "about.score3",
    },
    {
      img: "/assets/10.svg",
      content: "about.score1",
    },
    {
      img: "/assets/bag.svg",
      content: "about.score7",
    },
    {
      img: "/assets/building.svg",
      content: "about.score2",
    },
  ];
  const scores2 = [
    {
      img: "/assets/car.svg",
      content: "about.score5",
    },
    {
      img: "/assets/shop.svg",
      content: "about.score6",
    },

    {
      img: "/assets/people.svg",
      content: "about.score4",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center bg-main bg-[url('/assets/about-bg.svg')] bg-cover bg-center">
      <div className="flex w-full max-w-1200 items-center justify-between gap-20 overflow-hidden px-3 pb-20 pt-20 max-sm:flex-col max-sm:pt-20">
        <div className="relative flex h-full w-full justify-center px-3">
          <b className="text-center text-7xl text-white max-sm:text-5xl">
            {t("about.for")}
            <br /> {t("about.special")} <br />
            {t("about.offers")}
          </b>
        </div>
        <div className="flex w-full flex-col justify-center gap-4 px-3 text-xl text-white max-sm:text-xl">
          <div className="flex gap-3 max-sm:flex-col">
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl bg-mirror-gradient px-7 py-5 backdrop-blur-xl max-sm:gap-5">
              <img
                className="max-sm:w-10"
                height="70px"
                src="/assets/passport.svg"
                alt=""
              />
              <p>{t("about.offer2")}</p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl bg-mirror-gradient px-7 py-5 backdrop-blur-xl max-sm:gap-5">
              <img
                className="max-sm:w-10"
                height="70px"
                src="/assets/coin.svg"
                alt=""
              />
              <p>{t("about.offer1")}</p>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start gap-8 rounded-2xl bg-mirror-gradient px-7 py-5 text-2xl backdrop-blur-xl max-sm:gap-5">
            <img
              className="max-sm:w-10"
              height="70px"
              src="/assets/gift.svg"
              alt=""
            />
            <p>{t("about.offer3")}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-1200 items-center justify-between gap-20 px-3 py-20 max-md:flex-col-reverse max-sm:flex-col-reverse max-sm:gap-10 max-sm:overflow-hidden">
        <div className="flex w-full items-center gap-3 text-white">
          {/* <img
            className="max-sm:sc absolute bottom-0 right-0 max-w-[230%] origin-bottom transform max-sm:relative max-sm:max-w-[100%] max-sm:scale-[1.5] max-sm:scale-x-[-1.5]"
            src="/assets/about-2.png"
            alt=""
          /> */}
          <div className="flex w-full flex-col gap-3">
            {scores1.map(({ content, img }, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-mirror-gradient px-7 py-5 backdrop-blur-xl max-md:px-4 max-md:py-2 max-sm:gap-5"
              >
                <img className="h-11 w-auto max-sm:w-10" src={img} alt="" />
                <p>{t(content)}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col gap-3">
            {scores2.map(({ content, img }, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-mirror-gradient px-7 py-5 backdrop-blur-xl max-md:px-4 max-md:py-2 max-sm:gap-5"
              >
                <img className="h-11 w-auto max-sm:w-10" src={img} alt="" />
                <p>{t(content)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 px-3 text-white">
          <h1 className="text-4xl max-sm:text-center">{t("about.title")}</h1>
          <p className="text-lg text-gray-200">
            {t("about.description1")} <br /> {t("about.description2")}
          </p>
          <a
            href="tel:+998555049999"
            className="px4 flex w-max items-center gap-3 rounded-3xl bg-phone p-3 max-sm:w-full"
          >
            <b className="px-4 text-3xl max-sm:w-full">Bog'lanish</b>
            <div className="rounded-2xl bg-white bg-opacity-40 p-3">
              <img className="w-6" src="/assets/phone.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

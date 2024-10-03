import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  const scores = [
    {
      img: "/assets/tick.png",
      content: "about.score1",
    },
    {
      img: "/assets/tick.png",
      content: "about.score2",
    },
    {
      img: "/assets/tick.png",
      content: "about.score3",
    },
    {
      img: "/assets/tick.png",
      content: "about.score4",
    },
    {
      img: "/assets/tick.png",
      content: "about.score5",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center bg-main bg-[url('/assets/about-bg.svg')] bg-cover bg-center">
      <div className="flex w-full max-w-1200 items-center justify-between gap-20 overflow-hidden px-3 pb-20 pt-20 max-sm:flex-col max-sm:pt-20">
        <div className="relative flex h-full w-full justify-center px-3">
          <b className="text-center text-8xl text-white max-sm:text-5xl">
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
                src="/assets/discount.svg"
                alt=""
              />

              <p>{t("about.offer1")}</p>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start gap-8 rounded-2xl bg-mirror-gradient px-7 py-5 backdrop-blur-xl max-sm:gap-5">
            <img
              className="max-sm:w-10"
              height="70px"
              src="/assets/coin.svg"
              alt=""
            />
            <p>{t("about.offer3")}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-1200 items-stretch justify-between gap-20 px-3 pb-0 pt-20 max-sm:flex-col-reverse max-sm:gap-10 max-sm:overflow-hidden">
        <div className="relative w-full">
          <img
            className="max-sm:sc absolute bottom-0 right-0 max-w-[230%] origin-bottom transform max-sm:relative max-sm:max-w-[100%] max-sm:scale-[1.5] max-sm:scale-x-[-1.5]"
            src="/assets/about-2.png"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-6 px-3 pb-20 text-white">
          <h1 className="text-4xl max-sm:text-center">{t("about.title")}</h1>
          <p className="text-lg text-gray-200">
            {t("about.description1")} <br /> {t("about.description2")}
          </p>
          <div className="flex flex-col gap-4 text-lg">
            {scores.map(({ content, img }) => (
              <div key={content} className="flex items-center gap-4">
                <img src={img} alt="" />
                <b>{t(content)}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

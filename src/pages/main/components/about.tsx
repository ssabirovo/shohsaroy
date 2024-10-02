import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col items-center justify-center bg-main bg-[url('/assets/about-bg.svg')] bg-cover bg-center">
      <div className="flex w-full max-w-1200 items-end justify-between gap-20 overflow-hidden px-3 pb-20 pt-20 max-sm:flex-col max-sm:pt-48">
        <div className="relative flex h-full w-full justify-center px-3">
          <b className="text-center text-8xl text-white max-sm:text-7xl">
            {t("about.for")}
            <br /> {t("about.special")} <br />
            {t("about.offers")}
          </b>
          <div className="bg shadow-gold-palete absolute bottom-[85%] right-[-5%] h-max rotate-12 rounded bg-gold-border-gradient p-1 shadow-[14px_19px_8px_0px_rgba(0,0,0,0.26)] max-sm:bottom-[100%] max-sm:right-[0]">
            <div className="flex flex-col rounded bg-gold-bg-gradient p-1 text-center">
              <b className="text-5xl">{t("about.months")}</b>
              <b className="text-2xl">{t("about.till")}</b>
            </div>
          </div>
          <div className="bg shadow-gold-palete absolute bottom-[98%] right-[15%] h-max -rotate-12 rounded bg-gold-border-gradient p-1 shadow-[14px_19px_8px_0px_rgba(0,0,0,0.26)] max-sm:bottom-[110%] max-sm:right-[25%] max-sm:-rotate-6">
            <div className="flex flex-col rounded bg-gold-bg-gradient p-1 text-center">
              <b className="text-5xl">-25%</b>
              <b className="text-2xl">{t("about.discount")}</b>
            </div>
          </div>
          <div className="bg shadow-gold-palete absolute bottom-[100%] right-[38%] h-max -rotate-12 rounded bg-gold-border-gradient p-1 shadow-[14px_19px_8px_0px_rgba(0,0,0,0.26)] max-sm:bottom-[102%] max-sm:right-[60%]">
            <div className="flex flex-col rounded bg-gold-bg-gradient p-1 text-center">
              <b className="text-4xl">30%</b>
              <b className="h-[22px] text-xl">{t("about.start")}</b>
              <b className="h-[22px] text-xl">{t("about.payment")}</b>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center gap-4 px-3 text-4xl max-sm:text-2xl">
          <div className="w-full rounded bg-gold-border-gradient p-1">
            <div className="rounded bg-gold-bg-gradient px-6 py-2">
              <b>{t("about.offer1")}</b>
            </div>
          </div>
          <div className="w-full rounded bg-gold-border-gradient p-1">
            <div className="rounded bg-gold-bg-gradient px-6 py-2">
              <b>{t("about.offer2")}</b>
            </div>
          </div>
          <div className="w-full rounded bg-gold-border-gradient p-1">
            <div className="rounded bg-gold-bg-gradient px-6 py-2">
              <b>{t("about.offer3")}</b>
            </div>
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
            <div className="flex items-center gap-4">
              <img src="/assets/tick.png" alt="" />
              <b>{t("about.score1")}</b>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.png" alt="" />
              <b>{t("about.score2")}</b>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.png" alt="" />
              <b>{t("about.score3")}</b>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.png" alt="" />
              <b>{t("about.score4")}</b>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.png" alt="" />
              <b>{t("about.score5")}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

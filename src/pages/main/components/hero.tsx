import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Always good practice to prevent the default form submission behavior
    console.log(e);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/assets/hero-bg-2.png')] bg-cover bg-center max-lg:items-end max-sm:h-[110vh]">
      <div className="flex h-max w-full max-w-1200 items-start justify-between gap-14 px-3 py-4 max-lg:flex-col max-lg:items-center max-sm:h-full max-sm:gap-0 max-sm:p-0">
        <div className="text-white max-lg:text-center max-sm:hidden">
          <h1 className="text-5xl max-md:text-3xl">{t("hero.title")}</h1>
          <p className="text-2xl">{t("hero.description")}</p>
        </div>
        <div className="hidden h-full w-full flex-col justify-end bg-main bg-[url('/assets/hero-bg-mobile.png')] bg-cover text-white max-sm:flex">
          <div className="flex h-[50%] flex-col justify-end bg-black-gradient px-3 py-10">
            <h1 className="text-3xl">{t("hero.title")}</h1>
            <p className="text-base">{t("hero.description")}</p>
          </div>
        </div>

        <div className="flex w-[35%] flex-col gap-5 rounded-2xl bg-main p-9 text-white max-md:w-[65%] max-sm:w-full max-sm:rounded-none max-sm:bg-[url('/assets/form-bg.svg')]">
          <h1 className="max-md:text-1xl text-xl">{t("hero.form.title")}</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-1">
              <label className="text-xl" htmlFor="name">
                {t("hero.form.nameLabel")}
              </label>
              <input
                className="rounded p-2 text-main outline-main"
                type="text"
                id="name"
                placeholder={t("hero.form.namePlaceholder")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl" htmlFor="phone">
                {t("hero.form.phoneLabel")}
              </label>
              <input
                className="rounded p-2 text-main outline-main"
                type="text"
                id="phone"
                placeholder={t("hero.form.phonePlaceholder")}
              />
            </div>
            <button
              className="mt-6 rounded border border-white bg-white p-2 text-main transition-all hover:bg-main hover:text-white"
              type="submit"
            >
              {t("hero.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;

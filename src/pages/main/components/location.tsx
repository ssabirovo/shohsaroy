import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel, ConfigProvider } from "antd";

const Location: React.FC = () => {
  const { t } = useTranslation();

  const contentStyle: React.CSSProperties = {
    margin: 0,
    width: "100%",
  };

  const images = [
    "/assets/instagram1.png",
    "/assets/instagram2.jpg",
    "/assets/instagram3.jpg",
    "/assets/instagram4.jpg",
    "/assets/instagram5.jpg",
  ];

  return (
    <div id="location" className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-1200 flex-col items-center justify-between px-3 pb-20">
        <b className="w-full pb-10 pt-20 text-4xl text-main max-sm:text-center max-sm:text-3xl">
          {t("location.title")}
        </b>
        <div className="flex w-full gap-4 max-md:flex-col">
          <div className="flex w-full flex-col gap-4 text-center text-white">
            <div className="flex gap-4 text-sm max-sm:flex-col max-sm:text-lg">
              <div className="flex h-full w-full flex-col items-start justify-between gap-5 rounded-3xl bg-main p-6 text-start">
                <div className="flex items-center gap-4 text-2xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-40">
                    <img width="24px" src="/assets/location-white.svg" alt="" />
                  </div>
                  <b>{t("location.description")}</b>
                </div>
                <p>{t("location.address")}</p>
              </div>
              <div className="flex w-full flex-col gap-4">
                <a
                  href="https://t.me/shohsaroy_uylari"
                  className="flex items-center rounded-3xl bg-telegram p-3"
                >
                  <b className="w-full">t.me/shohsaroy_uylari</b>
                  <img src="/assets/telegram.svg" alt="" />
                </a>
                <a
                  href="tel:+998555049999"
                  className="flex items-center rounded-3xl bg-phone p-3"
                >
                  <b className="l w-full">+998 55 504 99 99</b>
                  <div className="rounded-2xl bg-white bg-opacity-40 p-3">
                    <img src="/assets/phone.svg" alt="" />
                  </div>
                </a>
              </div>
            </div>
            <div className="relative h-full overflow-hidden max-md:h-[50vh]">
              <a
                href="https://yandex.uz/maps/org/178554837261/?utm_medium=mapframe&utm_source=maps"
                className="absolute top-0 text-sm text-yellow-50"
              >
                Sokin Diyor
              </a>
              <a
                href="https://yandex.uz/maps/10335/tashkent/category/housing_complex/64960171169/?utm_medium=mapframe&utm_source=maps"
                className="absolute top-4 text-sm text-yellow-50"
              >
                Жилой комплекс в Ташкенте
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=69.342956%2C41.245263&mode=search&oid=178554837261&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJ6DBfXoB90T8R8%2BSaApmdwz8iBgABAgMEBSgKOABApZ8GSAFqAnV6nQHNzMw9oAEAqAEAvQGuivZpwgEGjbLKlZkFggIPc29raW4gZGl5b3IgdGptigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.342956%2C41.245263&sspn=0.143436%2C0.080515&text=sokin%20diyor%20tjm&z=12.93"
                allowFullScreen={true}
                className="relative h-full w-full rounded-3xl"
              ></iframe>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-5 overflow-hidden rounded-3xl bg-pink-500 p-6">
            <div className="flex h-full items-center justify-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-40">
                <img width="24px" src="/assets/instagram-pink.svg" alt="" />
              </div>
              <b className="text-2xl text-white">Instagram</b>
            </div>
            <ConfigProvider
              theme={{
                components: {
                  Carousel: {
                    arrowSize: 30,
                  },
                },
              }}
            >
              <Carousel
                className="w-full overflow-hidden rounded-2xl"
                effect="scrollx"
                arrows
                infinite
                draggable
                lazyLoad="progressive"
                autoplay
                autoplaySpeed={4000}
              >
                {images.map((src) => (
                  <div key={src}>
                    <a href="https://www.instagram.com/shohsaroyuylari/">
                      <img style={contentStyle} src={src} alt="" />
                    </a>
                  </div>
                ))}
              </Carousel>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center bg-main">
      <div className="flex w-full max-w-1200 items-center justify-between p-10 px-3">
        <img src="/assets/logo.svg" className="w-[120px]" alt="" />
        <div className="flex gap-4">
          <a
            href="https://t.me/shohsaroy_uylari"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-40"
          >
            <img width="24px" src="/assets/telegram.svg" alt="" />
          </a>
          <a
            href="https://yandex.uz/maps/10335/tashkent/?from=mapframe&ll=69.326393%2C41.254081&mode=routes&rtext=~41.254081%2C69.326393&rtt=auto&ruri=~&z=14"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-40"
          >
            <img width="24px" src="/assets/navigate.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/shohsaroyuylari/"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-40"
          >
            <img width="24px" src="/assets/instagram-pink.svg" alt="" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;

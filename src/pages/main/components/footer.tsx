import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center bg-main">
      <div className="flex w-full max-w-1200 items-center justify-between p-10 px-3">
        <img src="/assets/logo.svg" className="w-[120px]" alt="" />
        <div className="flex gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-40">
            <img width="24px" src="/assets/telegram.svg" alt="" />
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-40">
            <img width="24px" src="/assets/navigate.svg" alt="" />
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white bg-opacity-40">
            <img width="24px" src="/assets/instagram-pink.svg" alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

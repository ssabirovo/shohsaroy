import React from "react";

const Phone: React.FC = () => (
  <a
    href="tel:+998555049999"
    className="fixed bottom-10 right-10 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-phone"
  >
    <img width="24px" src="/assets/phone.svg" alt="" />
  </a>
);

export default Phone;

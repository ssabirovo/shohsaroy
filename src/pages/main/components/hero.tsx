import axios from "axios";
import React, { useState } from "react";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Input, notification } from "antd";
import "./hero.css";

type typeOpenNotification = {
  message: string;
  description: string;
  isSuccess: boolean;
};

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [api, contextHolder] = notification.useNotification();
  const [isPosting, setIsPosting] = useState(false);

  const openNotification = ({
    message,
    description,
    isSuccess,
  }: typeOpenNotification): void => {
    api.open({
      message: message,
      description: description,
      duration: 5000,
      icon: isSuccess ? (
        <CheckCircleFilled className="text-main" />
      ) : (
        <CloseCircleFilled className="text-red-500" />
      ),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Always good practice to prevent the default form submission behavior
    setIsPosting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(formData);

    axios
      .post(
        "https://service.app.uysot.uz/v1/external-source",
        {
          esType: "WEBSITE",
          message: "https://shohsaroy.uz/#rec664088122",
          name: payload?.name,
          phoneNumber: payload?.phone,
        },
        {
          headers: {
            "X-Auth":
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MyIsImV4cCI6Njc5OTgyMTg0OX0.-9lTMAIshpDjDw0TU0Z6itGyNrJ4Afu7Yvupir8tS3w",
          },
        },
      )
      .then(() => {
        openNotification({
          message: t("notification.successTitle"),
          description: t("notification.successDescription"),
          isSuccess: true,
        });
        setIsPosting(false);
      })
      .catch(() => {
        openNotification({
          message: t("notification.errorTitle"),
          description: t("notification.errorDescription"),
          isSuccess: false,
        });
        setIsPosting(false);
      });
  };

  return (
    <>
      {contextHolder}
      <div className="flex h-screen w-full items-center justify-center bg-[url('/assets/hero-bg-2.png')] bg-cover bg-center max-lg:items-end max-sm:h-[100vh] max-sm:bg-[url('/assets/hero-bg-mobile.png')]">
        <div className="flex h-max w-full max-w-1200 items-start justify-between gap-14 px-3 py-4 max-lg:flex-col max-lg:items-center max-sm:h-full max-sm:gap-0">
          <div className="text-white max-lg:text-center max-sm:mt-[150px]">
            <h1 className="text-5xl max-md:text-3xl">{t("hero.title")}</h1>
            <p className="text-2xl">{t("hero.description")}</p>
          </div>

          <div className="bg-mirror-gradient2 flex w-[35%] flex-col gap-5 rounded-2xl p-9 text-white backdrop-blur-xl max-md:w-[65%] max-sm:w-[100%]">
            <h1 className="max-md:text-1xl text-xl text-main">
              {t("hero.form.title")}
            </h1>
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <Input
                  id="name"
                  className="rounded-3xl border-2 border-transparent p-2 text-main hover:!border-phone focus:!border-phone"
                  name="name"
                  size="large"
                  placeholder={t("hero.form.nameLabel")}
                  prefix={<UserOutlined className="px-1" />}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Input
                  id="name"
                  className="rounded-3xl border-2 border-transparent p-2 text-main hover:!border-phone focus:!border-phone"
                  name="phone"
                  size="large"
                  placeholder={t("hero.form.phoneLabel")}
                  prefix={
                    <img
                      className="w-max px-1"
                      src="/assets/phone-green.svg"
                      alt=""
                    />
                  }
                />
              </div>
              <button
                disabled={isPosting}
                className="rounded-3xl border border-white bg-white p-2 text-main transition-all hover:bg-main hover:text-white"
                type="submit"
              >
                {t("hero.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

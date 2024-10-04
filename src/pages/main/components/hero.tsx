import axios from "axios";
import cx from "classnames";
import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Input, Modal, notification } from "antd";
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
  const [open, setOpen] = useState(false);

  const intervalRef = useRef<number | undefined>(); // Use `number` instead of `NodeJS.Timeout`

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setOpen(true);
    }, 15000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const openNotification = ({
    message,
    description,
    isSuccess,
  }: typeOpenNotification): void => {
    api.open({
      message: message,
      description: description,
      pauseOnHover: true,
      showProgress: true,

      icon: isSuccess ? (
        <CheckCircleFilled className="text-main" />
      ) : (
        <CloseCircleFilled className="text-red-500" />
      ),
    });
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Always good practice to prevent the default form submission behavior
    setIsPosting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(formData);

    if (payload?.name == "") {
      openNotification({
        message: t("notification.nameNotFoundTitle"),
        description: t("notification.nameNotFoundDescription"),
        isSuccess: false,
      });
      setIsPosting(false);
    }
    if (payload?.phone == "") {
      openNotification({
        message: t("notification.phoneNotFoundTitle"),
        description: t("notification.phoneNotFoundDescription"),
        isSuccess: false,
      });
      setIsPosting(false);
    } else {
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
        .then(async () => {
          openNotification({
            message: t("notification.successTitle"),
            description: t("notification.successDescription"),
            isSuccess: true,
          });
          setIsPosting(false);
          setOpen(false);

          clearInterval(intervalRef.current);
        })
        .catch(() => {
          openNotification({
            message: t("notification.errorTitle"),
            description: t("notification.errorDescription"),
            isSuccess: false,
          });
          setIsPosting(false);
        });
    }
  };

  return (
    <>
      <Modal
        closeIcon={false}
        centered
        open={open}
        onOk={closeModal}
        onCancel={closeModal}
        width="50%"
        footer={<div className="h-0"></div>}
      >
        <div className="flex gap-5">
          {/* <div className="bg w-full rounded bg-[url('/assets/operator.jpg')] bg-cover bg-right text-transparent">
            1
          </div> */}
          <div className="flex w-full flex-col gap-4">
            <div className="flex items-start justify-between">
              <h1 className="max-md:text-1xl text-xl text-main">
                {t("hero.form.title")}
              </h1>
              <CloseOutlined
                onClick={() => setOpen(false)}
                className="scale-150"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <Input
                  id="name"
                  className="focus rounded-3xl border-2 border-gray-200 border-transparent p-2 text-main focus-within:!border-phone hover:!border-phone"
                  name="name"
                  size="large"
                  placeholder={t("hero.form.nameLabel")}
                  prefix={<UserOutlined className="px-1" />}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Input
                  id="name"
                  className="rounded-3xl border-2 border-gray-200 border-transparent p-2 text-main focus-within:!border-phone hover:!border-phone"
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
                className={cx(
                  "rounded-3xl border-2 border-transparent bg-main p-2 text-white transition-all focus-within:!border-phone hover:!border-phone",
                )}
                type="submit"
              >
                {t("hero.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </Modal>
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
                  className="focus rounded-3xl border-2 border-transparent p-2 text-main focus-within:!border-phone hover:!border-phone"
                  name="name"
                  size="large"
                  placeholder={t("hero.form.nameLabel")}
                  prefix={<UserOutlined className="px-1" />}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Input
                  id="name"
                  className="rounded-3xl border-2 border-transparent p-2 text-main focus-within:!border-phone hover:!border-phone"
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
                className={cx(
                  "rounded-3xl border-2 border-transparent bg-white p-2 text-main transition-all focus-within:!border-phone hover:!border-phone",
                )}
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

import React from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";

interface NumericInputProps {
  style?: React.CSSProperties;
  value: string;
  onChange: (value: string) => void;
}

const NumericInput = (props: NumericInputProps) => {
  const { value, onChange } = props;

  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };

  return (
    <Input
      {...props}
      onChange={handleChange}
      onBlur={handleBlur}
      maxLength={16}
      className="rounded-3xl border-2 border-transparent bg-gray-100 p-2 text-main focus-within:!border-phone hover:!border-phone"
      name="phone"
      size="large"
      placeholder={t("hero.form.phoneLabel")}
      prefix={
        <img className="w-max px-1" src="/assets/phone-green.svg" alt="" />
      }
    />
  );
};

export default NumericInput;

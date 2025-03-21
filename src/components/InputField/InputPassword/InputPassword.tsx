"use client";
import React from "react";
import { InputPasswordProps } from "./InputPassword.types";
import InputField from "../InputField";
import { Icons } from "../..";

const InputPasswordField: React.FC<InputPasswordProps> = ({ ...props }) => {
  const [showsPassword, setShowsPassword] = React.useState(false);

  return (
    <InputField
      {...props}
      type={showsPassword ? "text" : "password"}
      trailingIcon={
        showsPassword ? (
          <Icons.Iconography.VisibilityOn />
        ) : (
          <Icons.Iconography.VisibilityOff />
        )
      }
      onTrailingIconClick={() => setShowsPassword(!showsPassword)}
    />
  );
};

export default InputPasswordField;

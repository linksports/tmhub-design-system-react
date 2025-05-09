import React from "react";
import { DividerProps } from "./Divider.types";
import { dividerRecipe } from "./Divider.css";

const Divider: React.FC<DividerProps> = ({
  type = "horizontal",
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={[dividerRecipe({ type }), className].filter(Boolean).join(" ")}
    />
  );
};

export default Divider;

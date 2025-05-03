import { ButtonProps } from "../Button/Button.types";
import * as Iconography from "../Icons/Iconography";

export const screenTypeValues = ["error", "success", "empty"] as const;

export type ErrorSuccessScreenProps = {
  type: (typeof screenTypeValues)[number];
  icon?: keyof typeof Iconography;
  title?: string;
  description?: string;
  button?: {
    children: React.ReactNode;
    onClick: ButtonProps["onClick"];
  };
} & React.ComponentProps<"div">;

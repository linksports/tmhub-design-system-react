import { InputFieldProps } from "../InputField.types";

export type InputPasswordProps = Omit<
  InputFieldProps,
  "type" | "trailingIcon" | "onTrailingIconClick"
>;

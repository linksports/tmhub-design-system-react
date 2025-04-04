import { AsChildProps } from "../../props/asChild.props";

export const sizeValues = ["sm", "default"] as const;
export const variantValues = [
  "primary",
  "secondary",
  "text",
  "danger",
  "dangerText",
] as const;

type Props = {
  size?: (typeof sizeValues)[number];
  variant?: (typeof variantValues)[number];
  children: React.ReactNode;
} & React.ComponentProps<"button">;

export type ButtonProps = AsChildProps<Props, "button">;

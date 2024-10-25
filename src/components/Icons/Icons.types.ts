export interface IconProps {
  color?: string;
  size?: IconSize;
}

export const iconSizeValues = [
  "xxs",
  "xs",
  "sm",
  "md",
  "ml",
  "lg",
  "xl",
  "xxl",
] as const;
export type IconSize = (typeof iconSizeValues)[number];

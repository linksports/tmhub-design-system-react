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
export const iconsSizeMap: Record<IconSize, number> = {
  xxs: 10,
  xs: 16,
  sm: 20,
  md: 24,
  ml: 32,
  lg: 40,
  xl: 56,
  xxl: 80,
};

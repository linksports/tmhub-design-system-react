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

export const colorValues = [
  "primary",
  "secondary",
  "tertiaryDisabled",
  "hyperlinks",
  "emphasis",
  "alert",
  "brandPrimary",
  "brandPrimaryDisabled",
  "brandSecondary",
  "inverse",
  "inverseSecondary",
  "onDark",
] as const;

export interface IconProps {
  size?: (typeof iconSizeValues)[number];
  color?: (typeof colorValues)[number];
  className?: string;
  style?: React.CSSProperties;
}

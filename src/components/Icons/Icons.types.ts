export const iconSizeValues = [
  "2xs",
  "xs",
  "sm",
  "md",
  "ml",
  "lg",
  "xl",
  "2xl",
] as const;

export const colorValues = [
  "inherit",
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

import { AsChildProps } from "../../props/asChild.props";

export const fontSizeValues = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
] as const;

export const lineHeightValues = ["none", "tight", "normal", "loose"] as const;
export const fontWeightValues = ["regular", "bold"] as const;
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
  "unset",
] as const;

export type Props = {
  fontSize: (typeof fontSizeValues)[number];
  lineHeight: (typeof lineHeightValues)[number];
  fontWeight: (typeof fontWeightValues)[number];
  color: (typeof colorValues)[number];
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string | undefined;
};

export type TextProps = AsChildProps<Props, "div">;

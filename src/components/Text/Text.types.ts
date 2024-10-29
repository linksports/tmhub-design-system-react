import { AsChildProps } from "../../props/asChild.props";

export const fontSizeValues = [
  "XXS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "XXXL",
] as const;

export const lineHeightValues = ["None", "Tight", "Normal", "Loose"] as const;
export const fontWeightValues = ["Regular", "Bold"] as const;
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

export type Props = {
  fontSize: (typeof fontSizeValues)[number];
  lineHeight: (typeof lineHeightValues)[number];
  fontWeight: (typeof fontWeightValues)[number];
  color: (typeof colorValues)[number];
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export type TextProps = AsChildProps<Props, "div">;

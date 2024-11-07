import { AsChildProps } from "../../props/asChild.props";

export const levelValues = ["S", "M", "L", "XL", "XXL", "XXXL"] as const;
export const LevelHTagsMap: Record<(typeof levelValues)[number], string> = {
  S: "h6",
  M: "h5",
  L: "h4",
  XL: "h3",
  XXL: "h2",
  XXXL: "h1",
};

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
  level: (typeof levelValues)[number];
  color?: (typeof colorValues)[number];
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string | undefined;
};

export type HeadingProps = AsChildProps<Props, "div">;

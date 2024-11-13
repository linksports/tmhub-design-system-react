import { AsChildProps } from "../../props/asChild.props";

export const levelValues = ["sm", "md", "lg", "xl", "2xl", "3xl"] as const;
export const LevelHTagsMap: Record<(typeof levelValues)[number], string> = {
  sm: "h6",
  md: "h5",
  lg: "h4",
  xl: "h3",
  "2xl": "h2",
  "3xl": "h1",
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
  "unset",
] as const;

export type Props = {
  level: (typeof levelValues)[number];
  color?: (typeof colorValues)[number];
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string | undefined;
};

export type HeadingProps = AsChildProps<Props, "div">;

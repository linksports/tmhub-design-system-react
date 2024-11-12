import { AsChildProps } from "../../props/asChild.props";
import { gapProps } from "../../props/gap.props";
import { paddingProps } from "../../props/padding.props";
import { boxSizingProps } from "../../props/boxSizing.props";

export const directionValues = [
  "row",
  "column",
  "row-reverse",
  "column-reverse",
] as const;
export const alignValues = [
  "start",
  "center",
  "end",
  "baseline",
  "stretch",
  "between",
  "around",
] as const;
export const justifyValues = [
  "start",
  "center",
  "end",
  "between",
  "around",
] as const;
export const wrapValues = ["nowrap", "wrap", "wrap-reverse"] as const;
export const displayValues = ["inline-flex", "flex"] as const;

type Props = {
  as?: "div" | "span";
  direction?: (typeof directionValues)[number];
  align?: (typeof alignValues)[number];
  justify?: (typeof justifyValues)[number];
  wrap?: (typeof wrapValues)[number];
  display?: (typeof displayValues)[number];
  children: React.ReactNode;
} & boxSizingProps &
  gapProps &
  paddingProps &
  React.ComponentProps<"div">;

export type FlexProps = AsChildProps<Props, "div">;

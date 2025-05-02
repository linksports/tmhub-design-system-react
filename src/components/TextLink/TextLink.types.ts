import { fontSizeValues } from "../Text/Text.types";

export const textLinkColorValues = ["primary", "hyperlinks"] as const;

export type TextLinkProps = {
  fontSize?: (typeof fontSizeValues)[number];
  color?: (typeof textLinkColorValues)[number];
  external?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
} & React.ComponentProps<"a">;

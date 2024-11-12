export const typeValues = [
  "default",
  "gray",
  "cyan",
  "orange",
  "pink",
] as const;

export type LabelProps = {
  type?: (typeof typeValues)[number];
  bold?: boolean;
  Icon?: React.ReactElement;
  text: string;
  onClick?: () => void;
};

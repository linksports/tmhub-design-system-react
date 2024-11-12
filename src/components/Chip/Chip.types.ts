export const typeValues = ["gray", "blue", "orange", "green"] as const;

export type ChipProps = {
  type: (typeof typeValues)[number];
  Icon?: React.ReactElement;
  filled?: boolean;
  text: string;
};

export const typeValues = ["gray", "blue", "orange", "green"] as const;

export type ChipProps = {
  type: (typeof typeValues)[number];
  filled?: boolean;
  children: React.ReactNode;
};

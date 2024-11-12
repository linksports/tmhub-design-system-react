export const typeValues = ["blue", "orange", "green"] as const;

export type SuggestionChipProps = {
  type: (typeof typeValues)[number];
  Icon?: React.ReactElement;
  text: string;
  onClick?: () => void;
};

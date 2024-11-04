export const typeValues = ["blue", "orange", "green"] as const;

export type FilterChipProps = {
  active?: boolean;
  Icon?: React.ReactElement;
  text: string;
  onClick?: () => void;
};

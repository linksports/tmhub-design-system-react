export const thTextAlignValues = ["left", "center"] as const;
export type ThProps = React.ComponentProps<"th"> & {
  index: number; // tr内のindex
  textAlign?: (typeof thTextAlignValues)[number];
  verticalWriting?: boolean;
  needsSortLabel?: boolean;
  children?: string | number;
};

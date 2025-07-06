export const tdTextAlignValues = ["left", "center", "right"] as const;

export type TdProps = React.ComponentProps<"td"> & {
  index: number; // tr内のindex
  textProps?: {
    textAlign?: (typeof tdTextAlignValues)[number];
    verticalWriting?: boolean;
  } & React.ComponentProps<"p">;
};

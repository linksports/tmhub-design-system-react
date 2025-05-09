export const orientationTypeValues = ["horizontal", "vertical"] as const;

export type DividerProps = {
  type?: (typeof orientationTypeValues)[number];
} & React.ComponentProps<"div">;

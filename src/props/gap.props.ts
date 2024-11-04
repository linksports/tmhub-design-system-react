import { sprinkles } from "../tokens/sprinkles.css";

export const gapValues = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
] as const;

export type gapProps = {
  gap?: (typeof gapValues)[number];
  gapX?: (typeof gapValues)[number];
  gapY?: (typeof gapValues)[number];
};

export const gapRecipes = {
  gap: {
    0: sprinkles({ gap: "none" }),
    1: sprinkles({ gap: "3xs" }),
    2: sprinkles({ gap: "2xs" }),
    3: sprinkles({ gap: "xs" }),
    4: sprinkles({ gap: "sm" }),
    5: sprinkles({ gap: "md" }),
    6: sprinkles({ gap: "lg" }),
    7: sprinkles({ gap: "xl" }),
    8: sprinkles({ gap: "2xl" }),
    9: sprinkles({ gap: "3xl" }),
    10: sprinkles({ gap: "4xl" }),
    11: sprinkles({ gap: "5xl" }),
    12: sprinkles({ gap: "6xl" }),
    13: sprinkles({ gap: "7xl" }),
    14: sprinkles({ gap: "8xl" }),
  },
  gapX: {
    0: sprinkles({ columnGap: "none" }),
    1: sprinkles({ columnGap: "3xs" }),
    2: sprinkles({ columnGap: "2xs" }),
    3: sprinkles({ columnGap: "xs" }),
    4: sprinkles({ columnGap: "sm" }),
    5: sprinkles({ columnGap: "md" }),
    6: sprinkles({ columnGap: "lg" }),
    7: sprinkles({ columnGap: "xl" }),
    8: sprinkles({ columnGap: "2xl" }),
    9: sprinkles({ columnGap: "3xl" }),
    10: sprinkles({ columnGap: "4xl" }),
    11: sprinkles({ columnGap: "5xl" }),
    12: sprinkles({ columnGap: "6xl" }),
    13: sprinkles({ columnGap: "7xl" }),
    14: sprinkles({ columnGap: "8xl" }),
  },
  gapY: {
    0: sprinkles({ rowGap: "none" }),
    1: sprinkles({ rowGap: "3xs" }),
    2: sprinkles({ rowGap: "2xs" }),
    3: sprinkles({ rowGap: "xs" }),
    4: sprinkles({ rowGap: "sm" }),
    5: sprinkles({ rowGap: "md" }),
    6: sprinkles({ rowGap: "lg" }),
    7: sprinkles({ rowGap: "xl" }),
    8: sprinkles({ rowGap: "2xl" }),
    9: sprinkles({ rowGap: "3xl" }),
    10: sprinkles({ rowGap: "4xl" }),
    11: sprinkles({ rowGap: "5xl" }),
    12: sprinkles({ rowGap: "6xl" }),
    13: sprinkles({ rowGap: "7xl" }),
    14: sprinkles({ rowGap: "8xl" }),
  },
} as const;

export const gapArgTypes = {
  gap: {
    control: "select",
    options: gapValues,
    description: "子要素間の余白",
    table: {
      type: { summary: gapValues.join("|") },
    },
  },
  gapX: {
    control: "select",
    options: gapValues,
    description: "子要素間の水平方向の余白",
    table: {
      type: { summary: gapValues.join("|") },
    },
  },
  gapY: {
    control: "select",
    options: gapValues,
    description: "子要素間の垂直方向の余白",
    table: {
      type: { summary: gapValues.join("|") },
    },
  },
} as const;

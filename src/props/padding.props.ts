import { sprinkles } from "../tokens/sprinkles.css";

export const paddingValues = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
] as const;

export type paddingProps = {
  p?: (typeof paddingValues)[number];
  pt?: (typeof paddingValues)[number];
  pr?: (typeof paddingValues)[number];
  pl?: (typeof paddingValues)[number];
  pb?: (typeof paddingValues)[number];
  px?: (typeof paddingValues)[number];
  py?: (typeof paddingValues)[number];
};

export const paddingRecipes = {
  p: {
    0: sprinkles({ padding: "none" }),
    1: sprinkles({ padding: "3xs" }),
    2: sprinkles({ padding: "2xs" }),
    3: sprinkles({ padding: "xs" }),
    4: sprinkles({ padding: "sm" }),
    5: sprinkles({ padding: "md" }),
    6: sprinkles({ padding: "lg" }),
    7: sprinkles({ padding: "xl" }),
    8: sprinkles({ padding: "2xl" }),
    9: sprinkles({ padding: "3xl" }),
    10: sprinkles({ padding: "4xl" }),
    11: sprinkles({ padding: "5xl" }),
    12: sprinkles({ padding: "6xl" }),
    13: sprinkles({ padding: "7xl" }),
    14: sprinkles({ padding: "8xl" }),
  },
  pt: {
    0: sprinkles({ paddingTop: "none" }),
    1: sprinkles({ paddingTop: "3xs" }),
    2: sprinkles({ paddingTop: "2xs" }),
    3: sprinkles({ paddingTop: "xs" }),
    4: sprinkles({ paddingTop: "sm" }),
    5: sprinkles({ paddingTop: "md" }),
    6: sprinkles({ paddingTop: "lg" }),
    7: sprinkles({ paddingTop: "xl" }),
    8: sprinkles({ paddingTop: "2xl" }),
    9: sprinkles({ paddingTop: "3xl" }),
    10: sprinkles({ paddingTop: "4xl" }),
    11: sprinkles({ paddingTop: "5xl" }),
    12: sprinkles({ paddingTop: "6xl" }),
    13: sprinkles({ paddingTop: "7xl" }),
    14: sprinkles({ paddingTop: "8xl" }),
  },
  pr: {
    0: sprinkles({ paddingRight: "none" }),
    1: sprinkles({ paddingRight: "3xs" }),
    2: sprinkles({ paddingRight: "2xs" }),
    3: sprinkles({ paddingRight: "xs" }),
    4: sprinkles({ paddingRight: "sm" }),
    5: sprinkles({ paddingRight: "md" }),
    6: sprinkles({ paddingRight: "lg" }),
    7: sprinkles({ paddingRight: "xl" }),
    8: sprinkles({ paddingRight: "2xl" }),
    9: sprinkles({ paddingRight: "3xl" }),
    10: sprinkles({ paddingRight: "4xl" }),
    11: sprinkles({ paddingRight: "5xl" }),
    12: sprinkles({ paddingRight: "6xl" }),
    13: sprinkles({ paddingRight: "7xl" }),
    14: sprinkles({ paddingRight: "8xl" }),
  },
  pl: {
    0: sprinkles({ paddingLeft: "none" }),
    1: sprinkles({ paddingLeft: "3xs" }),
    2: sprinkles({ paddingLeft: "2xs" }),
    3: sprinkles({ paddingLeft: "xs" }),
    4: sprinkles({ paddingLeft: "sm" }),
    5: sprinkles({ paddingLeft: "md" }),
    6: sprinkles({ paddingLeft: "lg" }),
    7: sprinkles({ paddingLeft: "xl" }),
    8: sprinkles({ paddingLeft: "2xl" }),
    9: sprinkles({ paddingLeft: "3xl" }),
    10: sprinkles({ paddingLeft: "4xl" }),
    11: sprinkles({ paddingLeft: "5xl" }),
    12: sprinkles({ paddingLeft: "6xl" }),
    13: sprinkles({ paddingLeft: "7xl" }),
    14: sprinkles({ paddingLeft: "8xl" }),
  },
  pb: {
    0: sprinkles({ paddingBottom: "none" }),
    1: sprinkles({ paddingBottom: "3xs" }),
    2: sprinkles({ paddingBottom: "2xs" }),
    3: sprinkles({ paddingBottom: "xs" }),
    4: sprinkles({ paddingBottom: "sm" }),
    5: sprinkles({ paddingBottom: "md" }),
    6: sprinkles({ paddingBottom: "lg" }),
    7: sprinkles({ paddingBottom: "xl" }),
    8: sprinkles({ paddingBottom: "2xl" }),
    9: sprinkles({ paddingBottom: "3xl" }),
    10: sprinkles({ paddingBottom: "4xl" }),
    11: sprinkles({ paddingBottom: "5xl" }),
    12: sprinkles({ paddingBottom: "6xl" }),
    13: sprinkles({ paddingBottom: "7xl" }),
    14: sprinkles({ paddingBottom: "8xl" }),
  },
  px: {
    0: sprinkles({ paddingX: "none" }),
    1: sprinkles({ paddingX: "3xs" }),
    2: sprinkles({ paddingX: "2xs" }),
    3: sprinkles({ paddingX: "xs" }),
    4: sprinkles({ paddingX: "sm" }),
    5: sprinkles({ paddingX: "md" }),
    6: sprinkles({ paddingX: "lg" }),
    7: sprinkles({ paddingX: "xl" }),
    8: sprinkles({ paddingX: "2xl" }),
    9: sprinkles({ paddingX: "3xl" }),
    10: sprinkles({ paddingX: "4xl" }),
    11: sprinkles({ paddingX: "5xl" }),
    12: sprinkles({ paddingX: "6xl" }),
    13: sprinkles({ paddingX: "7xl" }),
    14: sprinkles({ paddingX: "8xl" }),
  },
  py: {
    0: sprinkles({ paddingY: "none" }),
    1: sprinkles({ paddingY: "3xs" }),
    2: sprinkles({ paddingY: "2xs" }),
    3: sprinkles({ paddingY: "xs" }),
    4: sprinkles({ paddingY: "sm" }),
    5: sprinkles({ paddingY: "md" }),
    6: sprinkles({ paddingY: "lg" }),
    7: sprinkles({ paddingY: "xl" }),
    8: sprinkles({ paddingY: "2xl" }),
    9: sprinkles({ paddingY: "3xl" }),
    10: sprinkles({ paddingY: "4xl" }),
    11: sprinkles({ paddingY: "5xl" }),
    12: sprinkles({ paddingY: "6xl" }),
    13: sprinkles({ paddingY: "7xl" }),
    14: sprinkles({ paddingY: "8xl" }),
  },
};

export const paddingArgTypes = {
  p: {
    control: "select",
    options: paddingValues,
    description: "四方の余白",
    table: {
      type: { summary: paddingValues.join("|") },
    },
  },
  pt: {
    control: "select",
    options: paddingValues,
    description: "上の余白",
    table: {
      type: { summary: paddingValues.join("|") },
    },
  },
  pr: {
    control: "select",
    options: paddingValues,
    description: "右の余白",
    table: {
      type: { summary: paddingValues.join("|") },
    },
  },
  pl: {
    control: "select",
    options: paddingValues,
    description: "左の余白",
    table: {
      type: { summary: paddingValues.join("|") },
    },
  },
  pb: {
    control: "select",
    options: paddingValues,
    description: "下の余白",
    table: {
      type: { summary: paddingValues.join("|") },
    },
  },
  px: {
    control: "select",
    options: paddingValues,
    description: "左右の余白",
    table: {
      type: { summary: paddingValues.join("|") },
    },
  },
  py: {
    control: "select",
    options: paddingValues,
    description: "上下の余白",
    table: {
      type: { summary: paddingValues.join("|") },
    },
  },
} as const;

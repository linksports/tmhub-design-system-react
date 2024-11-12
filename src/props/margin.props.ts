import { sprinkles } from "../tokens/sprinkles.css";

export const marginValues = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
] as const;

export type marginProps = {
  m?: (typeof marginValues)[number];
  mt?: (typeof marginValues)[number];
  mr?: (typeof marginValues)[number];
  ml?: (typeof marginValues)[number];
  mb?: (typeof marginValues)[number];
};

export const marginRecipes = {
  p: {
    0: sprinkles({ margin: "none" }),
    1: sprinkles({ margin: "3xs" }),
    2: sprinkles({ margin: "2xs" }),
    3: sprinkles({ margin: "xs" }),
    4: sprinkles({ margin: "sm" }),
    5: sprinkles({ margin: "md" }),
    6: sprinkles({ margin: "lg" }),
    7: sprinkles({ margin: "xl" }),
    8: sprinkles({ margin: "2xl" }),
    9: sprinkles({ margin: "3xl" }),
    10: sprinkles({ margin: "4xl" }),
    11: sprinkles({ margin: "5xl" }),
    12: sprinkles({ margin: "6xl" }),
    13: sprinkles({ margin: "7xl" }),
    14: sprinkles({ margin: "8xl" }),
  },
  pt: {
    0: sprinkles({ marginTop: "none" }),
    1: sprinkles({ marginTop: "3xs" }),
    2: sprinkles({ marginTop: "2xs" }),
    3: sprinkles({ marginTop: "xs" }),
    4: sprinkles({ marginTop: "sm" }),
    5: sprinkles({ marginTop: "md" }),
    6: sprinkles({ marginTop: "lg" }),
    7: sprinkles({ marginTop: "xl" }),
    8: sprinkles({ marginTop: "2xl" }),
    9: sprinkles({ marginTop: "3xl" }),
    10: sprinkles({ marginTop: "4xl" }),
    11: sprinkles({ marginTop: "5xl" }),
    12: sprinkles({ marginTop: "6xl" }),
    13: sprinkles({ marginTop: "7xl" }),
    14: sprinkles({ marginTop: "8xl" }),
  },
  pr: {
    0: sprinkles({ marginRight: "none" }),
    1: sprinkles({ marginRight: "3xs" }),
    2: sprinkles({ marginRight: "2xs" }),
    3: sprinkles({ marginRight: "xs" }),
    4: sprinkles({ marginRight: "sm" }),
    5: sprinkles({ marginRight: "md" }),
    6: sprinkles({ marginRight: "lg" }),
    7: sprinkles({ marginRight: "xl" }),
    8: sprinkles({ marginRight: "2xl" }),
    9: sprinkles({ marginRight: "3xl" }),
    10: sprinkles({ marginRight: "4xl" }),
    11: sprinkles({ marginRight: "5xl" }),
    12: sprinkles({ marginRight: "6xl" }),
    13: sprinkles({ marginRight: "7xl" }),
    14: sprinkles({ marginRight: "8xl" }),
  },
  pl: {
    0: sprinkles({ marginLeft: "none" }),
    1: sprinkles({ marginLeft: "3xs" }),
    2: sprinkles({ marginLeft: "2xs" }),
    3: sprinkles({ marginLeft: "xs" }),
    4: sprinkles({ marginLeft: "sm" }),
    5: sprinkles({ marginLeft: "md" }),
    6: sprinkles({ marginLeft: "lg" }),
    7: sprinkles({ marginLeft: "xl" }),
    8: sprinkles({ marginLeft: "2xl" }),
    9: sprinkles({ marginLeft: "3xl" }),
    10: sprinkles({ marginLeft: "4xl" }),
    11: sprinkles({ marginLeft: "5xl" }),
    12: sprinkles({ marginLeft: "6xl" }),
    13: sprinkles({ marginLeft: "7xl" }),
    14: sprinkles({ marginLeft: "8xl" }),
  },
  pb: {
    0: sprinkles({ marginBottom: "none" }),
    1: sprinkles({ marginBottom: "3xs" }),
    2: sprinkles({ marginBottom: "2xs" }),
    3: sprinkles({ marginBottom: "xs" }),
    4: sprinkles({ marginBottom: "sm" }),
    5: sprinkles({ marginBottom: "md" }),
    6: sprinkles({ marginBottom: "lg" }),
    7: sprinkles({ marginBottom: "xl" }),
    8: sprinkles({ marginBottom: "2xl" }),
    9: sprinkles({ marginBottom: "3xl" }),
    10: sprinkles({ marginBottom: "4xl" }),
    11: sprinkles({ marginBottom: "5xl" }),
    12: sprinkles({ marginBottom: "6xl" }),
    13: sprinkles({ marginBottom: "7xl" }),
    14: sprinkles({ marginBottom: "8xl" }),
  },
};

export const marginArgTypes = {
  p: {
    control: "select",
    options: marginValues,
    description: "四方の余白",
    table: {
      type: { summary: marginValues.join("|") },
    },
  },
  pt: {
    control: "select",
    options: marginValues,
    description: "上の余白",
    table: {
      type: { summary: marginValues.join("|") },
    },
  },
  pr: {
    control: "select",
    options: marginValues,
    description: "右の余白",
    table: {
      type: { summary: marginValues.join("|") },
    },
  },
  pl: {
    control: "select",
    options: marginValues,
    description: "左の余白",
    table: {
      type: { summary: marginValues.join("|") },
    },
  },
  pb: {
    control: "select",
    options: marginValues,
    description: "下の余白",
    table: {
      type: { summary: marginValues.join("|") },
    },
  },
} as const;

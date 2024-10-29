import { recipe } from "@vanilla-extract/recipes";
import { gapRecipes } from "../../props/gap.props";
import { paddingRecipes } from "../../props/padding.props";

export const flex = recipe({
  base: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "flex-start",
  },
  variants: {
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
      "row-reverse": { flexDirection: "row-reverse" },
      "column-reverse": { flexDirection: "column-reverse" },
    },
    align: {
      start: { alignItems: "flex-start", alignContent: "flex-start" },
      center: { alignItems: "center", alignContent: "center" },
      end: { alignItems: "flex-end", alignContent: "flex-end" },
      baseline: { alignItems: "baseline" },
      stretch: { alignItems: "stretch", alignContent: "stretch" },
      between: { alignContent: "space-between" },
      around: { alignContent: "space-around" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
    },
    display: {
      flex: { display: "flex" },
      "inline-flex": { display: "inline-flex" },
    },
    wrap: {
      nowrap: { flexWrap: "nowrap" },
      wrap: { flexWrap: "wrap" },
      "wrap-reverse": { flexWrap: "wrap-reverse" },
    },
    ...gapRecipes,
    ...paddingRecipes,
  },
  defaultVariants: {},
});

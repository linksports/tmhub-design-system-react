import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../tokens/sprinkles.css";

export const thRecipe = recipe({
  base: [
    {
      boxSizing: "border-box",
    },
    sprinkles({
      paddingY: "2xs",
      paddingX: "xs",
      backgroundColor: {
        lightMode: "backgroundTableHeadLight",
        darkMode: "backgroundTableHeadDark",
      },
    }),
  ],
  variants: {
    needsSort: {
      true: {
        cursor: "pointer",
      },
      false: {},
    },
  },
  defaultVariants: {
    needsSort: false,
  },
});

export const thSortIconRecipe = recipe({
  base: [
    sprinkles({
      padding: "2xs",
    }),
  ],
});

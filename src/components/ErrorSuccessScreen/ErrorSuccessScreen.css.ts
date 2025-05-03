import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const iconRecipe = recipe({
  base: {
    width: "140px",
    height: "140px",
  },
  variants: {
    type: {
      success: sprinkles({
        color: {
          lightMode: "successLight",
          darkMode: "successDark",
        },
      }),
      empty: sprinkles({
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
      error: sprinkles({
        color: {
          lightMode: "alertTextLight",
          darkMode: "alertTextDark",
        },
      }),
    },
  },
  defaultVariants: {
    type: "success",
  },
});

export const textRecipe = recipe({
  base: [
    sprinkles({
      marginTop: "xs",
    }),
  ],
});

export const buttonRecipe = recipe({
  base: [
    sprinkles({
      marginTop: "lg",
    }),
  ],
});

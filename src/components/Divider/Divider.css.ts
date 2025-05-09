import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const dividerRecipe = recipe({
  base: [
    sprinkles({
      backgroundColor: {
        lightMode: "borderLight",
        darkMode: "borderDark",
      },
    }),
  ],
  variants: {
    type: {
      horizontal: {
        height: "1px",
        width: "100%",
      },
      vertical: {
        width: "1px",
        height: "100%",
      },
    },
  },
  defaultVariants: {
    type: "horizontal",
  },
});

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const designProviderRecipe = recipe({
  base: sprinkles({
    backgroundColor: {
      lightMode: "backgroundLight",
      darkMode: "backgroundDark",
    },
    color: {
      lightMode: "primaryTextLight",
      darkMode: "primaryTextDark",
    },
  }),
});

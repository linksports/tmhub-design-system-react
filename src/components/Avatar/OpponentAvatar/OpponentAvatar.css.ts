import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../tokens/sprinkles.css";

export const OpponentAvatarRecipe = recipe({
  base: [
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundTertiaryLight",
        darkMode: "backgroundTertiaryDark",
      },
    }),
  ],
});

export const SportIconRecipe = recipe({
  base: [
    {
      width: "62.5%",
      height: "62.5%",
    },
  ],
});

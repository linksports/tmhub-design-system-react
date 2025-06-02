import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../tokens/sprinkles.css";

export const TeamAvatarRecipe = recipe({
  base: [
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundSecondaryLight",
        darkMode: "backgroundSecondaryDark",
      },
    }),
  ],
});

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../tokens/sprinkles.css";

export const UserAvatarRecipe = recipe({
  base: [
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundSecondaryLight",
        darkMode: "backgroundSecondaryDark",
      },
    }),
  ],
});

export const SecretUserRecipe = recipe({
  base: [
    {
      width: "62.5%",
      height: "62.5%",
    },
  ],
});

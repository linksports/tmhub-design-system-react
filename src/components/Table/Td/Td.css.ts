import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../tokens/sprinkles.css";

export const tdRecipe = recipe({
  base: [
    {
      boxSizing: "border-box",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      height: "40px",
    },
    sprinkles({
      paddingLeft: "xs",
      paddingRight: "xs",
      borderColor: {
        lightMode: "borderLight",
        darkMode: "borderDark",
      },
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
});

export const tdTextRecipe = recipe({
  base: [
    {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "100%",
    },
  ],
});

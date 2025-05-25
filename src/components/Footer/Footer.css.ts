import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const containerRecipe = recipe({
  base: [
    {
      width: "100vw",
    },
    sprinkles({
      paddingTop: "md",
      paddingX: "md",
      paddingBottom: {
        sp: "md",
        pc: "xs",
      },
      gap: "lg",
      backgroundColor: {
        lightMode: "backgroundBoldLight",
        darkMode: "backgroundBoldDark",
      },
    }),
  ],
});

export const topContentRecipe = recipe({
  base: [
    sprinkles({
      gap: {
        sp: "lg",
      },
      flexDirection: {
        sp: "column",
        pc: "row",
      },
    }),
  ],
});

export const menusRecipe = recipe({
  base: [
    sprinkles({
      gap: {
        sp: "md",
        pc: "lg",
      },
    }),
  ],
});

export const copyrightContainerRecipe = recipe({
  base: [
    { width: "100%" },
    sprinkles({
      gap: {
        sp: "xs",
        pc: "lg",
      },
      justifyContent: {
        sp: "flex-start",
        pc: "center",
      },
    }),
  ],
});

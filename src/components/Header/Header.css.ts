import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const containerRecipe = recipe({
  base: [
    {
      width: "100vw",
      top: 0,
      left: 0,
      zIndex: 1,
    },
    sprinkles({
      boxShadow: "shadow2",
    }),
  ],
  variants: {
    position: {
      fixed: {
        position: "fixed",
      },
      sticky: {
        position: "sticky",
      },
    },
  },
  defaultVariants: {
    position: "sticky",
  },
});
export const topHeaderContainerRecipe = recipe({
  base: [
    {
      width: "100%",
      height: "56px",
    },
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
    sprinkles({
      paddingX: {
        sp: "md",
        pc: "lg",
      },
    }),
  ],
});

export const menuIconRecipe = recipe({
  base: [
    {
      cursor: "pointer",
    },
  ],
  variants: {
    onlySp: {
      true: sprinkles({
        display: {
          pc: "none",
        },
      }),
    },
  },
  defaultVariants: {
    onlySp: true,
  },
});

export const tabContainerRecipe = recipe({
  base: [
    {
      alignSelf: "end",
    },
    sprinkles({
      display: {
        sp: "none !important",
      },
      marginLeft: "2xl",
    }),
  ],
});

export const dividerRecipe = recipe({
  base: [
    {
      height: "40px",
    },
  ],
});

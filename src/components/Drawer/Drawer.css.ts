import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";
import { keyframes } from "@vanilla-extract/css";

export const overlayRecipe = recipe({
  base: [
    {
      position: "fixed",
      inset: 0,
      backdropFilter: "blur(2px)",
      zIndex: 2,
    },
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundBackdropLight",
        darkMode: "backgroundBackdropDark",
      },
    }),
  ],
});

const slideInFromLeft = keyframes({
  from: {
    transform: "translateX(-100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

export const contentRecipe = recipe({
  base: [
    {
      position: "fixed",
      inset: 0,
      height: "100vh",
      maxWidth: "319px",
      overflowY: "auto",
      width: "calc(100vw - 56px)",
      selectors: {
        '&[data-state="open"]': {
          animation: `${slideInFromLeft} 200ms ease-out forwards`,
        },
      },
      zIndex: 3,
    },
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
});

export const closeButtonContainerRecipe = recipe({
  base: [
    {
      width: "100%",
    },
    sprinkles({
      padding: "md",
    }),
  ],
});

export const closeButtonRecipe = recipe({
  base: [
    {
      cursor: "pointer",
      lineHeight: "normal",
      minHeight: "auto",
    },
  ],
});

export const sectionContainerRecipe = recipe({
  base: [
    {
      width: "100%",
    },
  ],
});

export const sectionTitleRecipe = recipe({
  base: [
    {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    sprinkles({
      padding: "md",
    }),
  ],
});

export const menuItemContainerRecipe = recipe({
  base: [
    {
      cursor: "pointer",
      overflow: "hidden",
      transition: "background-color.2s ease-out, color.2s ease-out",
    },
    sprinkles({
      padding: "md",
      backgroundColor: {
        lightModeHover: "backgroundMenuHoverLight",
        darkModeHover: "backgroundMenuHoverDark",
        lightModePressed: "backgroundMenuPressedLight",
        darkModePressed: "backgroundMenuPressedDark",
      },
    }),
  ],
  variants: {
    selected: {
      true: sprinkles({
        backgroundColor: {
          lightMode: "backgroundMenuSelectedLight",
          darkMode: "backgroundMenuSelectedDark",
        },
      }),
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const menuItemIconRecipe = recipe({
  base: [
    {
      flex: "0 0 1",
    },
  ],
});

export const menuItemTextRecipe = recipe({
  base: [
    {
      flex: 1,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  ],
});

export const menuItemLabelRecipe = recipe({
  base: [
    {
      flex: "0 0 1",
    },
  ],
});

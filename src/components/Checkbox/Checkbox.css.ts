// Checkbox.css.ts
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const checkBoxRootRecipe = recipe({
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
      },
      false: {
        cursor: "pointer",
      },
    },
  },
  compoundVariants: [
    {
      variants: { disabled: true },
      style: sprinkles({
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
    },
    {
      variants: { disabled: false },
      style: sprinkles({
        color: {
          lightMode: "secondaryTextLight",
          darkMode: "secondaryTextDark",
          lightModeHover: "primaryTextLight",
          darkModeHover: "primaryTextDark",
          lightModeChecked: "primaryTextLight",
          darkModeChecked: "primaryTextDark",
        },
      }),
    },
  ],
  defaultVariants: {
    disabled: false,
  },
});

export const checkBoxBoxRecipe = recipe({
  base: [
    {
      width: "24px",
      height: "24px",
      borderRadius: "4px",
      borderWidth: "2px",
      borderStyle: "solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      selectors: {
        "&:has(> span)": {
          borderColor: "transparent",
        },
      },
    },
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
  variants: {
    disabled: {
      true: sprinkles({
        borderColor: {
          lightMode: "selectorDisabledLight",
          darkMode: "selectorDisabledDark",
        },
      }),
      false: sprinkles({
        borderColor: {
          lightMode: "selectorLight",
          darkMode: "selectorDark",
        },
      }),
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const checkMarkRecipe = recipe({
  base: [
    {
      borderRadius: "4px",
    },
    sprinkles({
      color: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
  variants: {
    disabled: {
      true: sprinkles({
        backgroundColor: {
          lightMode: "selectorDisabledLight",
          darkMode: "selectorDisabledDark",
        },
      }),
      false: sprinkles({
        backgroundColor: {
          lightMode: "selectorLight",
          darkMode: "selectorDark",
        },
      }),
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const radioItemRecipe = recipe({
  base: [
    {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
  ],
  variants: {
    disabled: {
      true: sprinkles({
        color: {
          lightModeDisabled: "tertiaryDisabledTextLight",
          darkModeDisabled: "tertiaryDisabledTextDark",
        },
      }),
    },
  },
  compoundVariants: [
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
    {
      variants: { disabled: false },
      style: {
        cursor: "pointer",
      },
    },
  ],
  defaultVariants: {
    disabled: false,
  },
});

export const radioIndicatorRecipe = recipe({
  base: [
    {
      position: "relative",
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      borderWidth: "2px",
      borderStyle: "solid",
      display: "flex",
      boxSizing: "border-box",
      selectors: {
        "&:has(> span)": {
          borderColor: "transparent",
        },
      },
    },
    sprinkles({
      borderColor: {
        lightMode: "selectorLight",
        darkMode: "selectorDark",
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

export const radioCircleRecipe = recipe({
  base: [
    {
      position: "absolute",
      top: "-2px",
      left: "-2px",
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      borderWidth: "5px",
      borderStyle: "solid",
      display: "flex",
      boxSizing: "border-box",
    },
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

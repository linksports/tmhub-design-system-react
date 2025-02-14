import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const tabBarRecipe = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
  },
});

export const tabBarListRecipe = recipe({
  base: [
    {
      flexShrink: 0,
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      boxSizing: "border-box",
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
    },
    sprinkles({
      borderColor: {
        lightMode: "borderLight",
        darkMode: "borderDark",
      },
    }),
  ],
  variants: {
    bordered: {
      true: sprinkles({
        borderColor: {
          lightMode: "borderLight",
          darkMode: "borderDark",
        },
      }),
      false: sprinkles({
        borderColor: "transparent",
      }),
    },
    size: {
      default: { height: "28px" },
      small: { height: "24px" },
    },
  },
  defaultVariants: {
    bordered: true,
    size: "default",
  },
});

export const tabBarTriggerRecipe = recipe({
  base: [
    {
      flex: "0 0 auto",
      backgroundColor: "inherit",
      userSelect: "none",
      selectors: {
        '&[data-state="active"]': {
          position: "relative",
        },
      },
    },
  ],
  variants: {
    disabled: {
      true: sprinkles({
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
      false: sprinkles({
        borderColor: {
          lightModeActive: "borderLight",
          darkModeActive: "borderDark",
        },
        color: {
          lightMode: "secondaryTextLight",
          darkMode: "secondaryTextDark",
          lightModeActive: "primaryTextLight",
          darkModeActive: "primaryTextDark",
          lightModePressed: "primaryTextLight",
          darkModePressed: "primaryTextDark",
        },
        backgroundColor: {
          lightModePressed: "backgroundSegmentedControlButtonPressedLight",
          darkModePressed: "backgroundSegmentedControlButtonPressedDark",
        },
      }),
    },
  },
  compoundVariants: [
    {
      variants: { disabled: false },
      style: {
        userSelect: "none",
        selectors: {
          "&:hover": {
            cursor: "pointer",
          },
        },
      },
    },
  ],
  defaultVariants: {
    disabled: false,
  },
});

export const tabBarTriggerActiveBorderRecipe = recipe({
  base: [
    {
      display: "none",
      selectors: {
        '[data-state="active"] > &': {
          display: "block",
          boxSizing: "border-box",
          height: "2px",
          width: "100%",
          position: "absolute",
          bottom: "-2px",
          left: 0,
          right: 0,
        },
      },
    },
    sprinkles({
      backgroundColor: {
        lightMode: "borderActiveLight",
        darkMode: "borderActiveDark",
      },
    }),
  ],
});

export const tabBarContentRecipe = recipe({
  base: {
    flexGrow: 1,
    backgroundColor: "inherit",
    outline: "none",
  },
});

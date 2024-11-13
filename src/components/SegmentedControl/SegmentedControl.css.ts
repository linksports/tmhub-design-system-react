import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const segmentedControlRecipe = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
  },
});

export const segmentedControlListRecipe = recipe({
  base: [
    {
      flexShrink: 0,
      display: "flex",
      borderRadius: "4px",
    },
    sprinkles({
      padding: "3xs",
      backgroundColor: {
        lightMode: "backgroundBoldLight",
        darkMode: "backgroundBoldDark",
      },
    }),
  ],
});

export const segmentedControlTriggerRecipe = recipe({
  base: [
    {
      flex: 1,
      backgroundColor: "inherit",
      userSelect: "none",
      borderRadius: "4px",
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
        color: {
          lightMode: "primaryTextLight",
          darkMode: "primaryTextDark",
        },
        borderColor: {
          lightModeActive: "borderLight",
          darkModeActive: "borderDark",
        },
        backgroundColor: {
          lightModeActive: "backgroundSurfaceBrightLight",
          darkModeActive: "backgroundSurfaceBrightDark",
          lightModeHover: "backgroundSegmentedControlButtonHoverLight",
          darkModeHover: "backgroundSegmentedControlButtonHoverDark",
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
        flex: 1,
        userSelect: "none",
        selectors: {
          "&:hover": {
            cursor: "pointer",
          },
          '&[data-state="active"]': {
            borderWidth: "1px",
            borderStyle: "solid",
          },
        },
      },
    },
  ],
  defaultVariants: {
    disabled: false,
  },
});

export const segmentedControlContentRecipe = recipe({
  base: {
    flexGrow: 1,
    backgroundColor: "inherit",
    outline: "none",
  },
});

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const headingRecipe = recipe({
  base: [
    {
      fontWeight: 600,
      lineHeight: 1.25,
      fontFamily: "inherit",
    },
    sprinkles({
      display: "inline-block",
      margin: "none",
      padding: "none",
    }),
  ],
  variants: {
    level: {
      sm: { fontSize: "14px" },
      md: { fontSize: "16px" },
      lg: { fontSize: "19px" },
      xl: { fontSize: "24px" },
      "2xl": { fontSize: "32px" },
      "3xl": { fontSize: "48px" },
    },
    color: {
      primary: sprinkles({
        color: {
          lightMode: "primaryTextLight",
          darkMode: "primaryTextDark",
        },
      }),
      secondary: sprinkles({
        color: {
          lightMode: "secondaryTextLight",
          darkMode: "secondaryTextDark",
        },
      }),
      tertiaryDisabled: sprinkles({
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
      hyperlinks: sprinkles({
        color: {
          lightMode: "hyperlinksTextLight",
          darkMode: "hyperlinksTextDark",
        },
      }),
      emphasis: sprinkles({
        color: {
          lightMode: "emphasisTextLight",
          darkMode: "emphasisTextDark",
        },
      }),
      alert: sprinkles({
        color: {
          lightMode: "alertTextLight",
          darkMode: "alertTextDark",
        },
      }),
      brandPrimary: sprinkles({
        color: {
          lightMode: "brandPrimaryTextLight",
          darkMode: "brandPrimaryTextDark",
        },
      }),
      brandPrimaryDisabled: sprinkles({
        color: {
          lightMode: "brandPrimaryDisabledTextLight",
          darkMode: "brandPrimaryDisabledTextDark",
        },
      }),
      brandSecondary: sprinkles({
        color: {
          lightMode: "brandSecondaryTextLight",
          darkMode: "brandSecondaryTextDark",
        },
      }),
      inverse: sprinkles({
        color: {
          lightMode: "inverseTextLight",
          darkMode: "inverseTextDark",
        },
      }),
      inverseSecondary: sprinkles({
        color: {
          lightMode: "inverseTextSecondaryLight",
          darkMode: "inverseTextSecondaryDark",
        },
      }),
      onDark: sprinkles({
        color: {
          lightMode: "onDarkTextLight",
          darkMode: "onDarkTextDark",
        },
      }),
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const headingRecipe = recipe({
  base: [
    {
      fontWeight: 600,
      lineHeight: 1.25,
    },
    sprinkles({
      display: "inline-block",
      margin: "none",
      padding: "none",
    }),
  ],
  variants: {
    level: {
      S: { fontSize: "14px" },
      M: { fontSize: "16px" },
      L: { fontSize: "19px" },
      XL: { fontSize: "24px" },
      XXL: { fontSize: "32px" },
      XXXL: { fontSize: "48px" },
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

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const icons = recipe({
  variants: {
    size: {
      "2xs": { width: "10px", height: "10px" },
      xs: { width: "16px", height: "16px" },
      sm: { width: "20px", height: "20px" },
      md: { width: "24px", height: "24px" },
      ml: { width: "32px", height: "32px" },
      lg: { width: "40px", height: "40px" },
      xl: { width: "56px", height: "56px" },
      "2xl": { width: "80px", height: "80px" },
    },
    color: {
      inherit: sprinkles({
        color: "inherit",
      }),
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
    size: "md",
    color: "inherit",
  },
});

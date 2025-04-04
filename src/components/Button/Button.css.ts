import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const button = recipe({
  base: [
    {
      borderRadius: "20px",
      fontFamily: "inherit",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      textDecoration: "none",
      fontWeight: 600,
      lineHeight: 1,
      outlineOffset: "-1px",
      outlineWidth: "1px",
      outlineStyle: "solid",
      border: "none",
      cursor: "pointer",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      transition: "background-color.2s ease-out, color.2s ease-out",
      ":disabled": {
        cursor: "not-allowed",
      },
      selectors: {
        "&:hover:not(:disabled)": {
          cursor: "pointer",
        },
      },
    },
    sprinkles({
      display: "inline-block",
      padding: "none",
    }),
  ],
  variants: {
    size: {
      sm: { width: "80px", height: "30px", fontSize: "14px" },
      default: { width: "286px", height: "40px", fontSize: "16px" },
    },
    variant: {
      primary: sprinkles({
        outlineColor: "transparent",
        backgroundColor: {
          lightMode: "primaryLight",
          darkMode: "primaryDark",
          lightModeHover: "backgroundPrimaryHoverLight",
          darkModeHover: "backgroundPrimaryHoverDark",
          lightModePressed: "backgroundPrimaryPressedLight",
          darkModePressed: "backgroundPrimaryPressedDark",
          lightModeDisabled: "backgroundPrimaryDisabledLight",
          darkModeDisabled: "backgroundPrimaryDisabledDark",
        },
        color: {
          lightMode: "brandPrimaryTextLight",
          darkMode: "brandPrimaryTextDark",
          lightModeDisabled: "brandPrimaryDisabledTextLight",
          darkModeDisabled: "brandPrimaryDisabledTextDark",
        },
      }),
      secondary: sprinkles({
        outlineColor: {
          lightMode: "borderBoldLight",
          darkMode: "borderBoldDark",
          lightModePressed: "transparent",
          darkModePressed: "transparent",
          lightModeDisabled: "borderBoldDisabledLight",
          darkModeDisabled: "borderBoldDisabledDark",
        },
        backgroundColor: {
          lightMode: "inherit",
          darkMode: "inherit",
          lightModeHover: "backgroundNatureHoverLight",
          darkModeHover: "backgroundNatureHoverDark",
          lightModePressed: "backgroundNaturePressedLight",
          darkModePressed: "backgroundNaturePressedDark",
          lightModeDisabled: "inherit",
          darkModeDisabled: "inherit",
        },
        color: {
          lightMode: "secondaryTextLight",
          darkMode: "secondaryTextDark",
          lightModePressed: "inverseTextLight",
          darkModePressed: "inverseTextDark",
          lightModeDisabled: "tertiaryDisabledTextLight",
          darkModeDisabled: "tertiaryDisabledTextDark",
        },
      }),
      text: sprinkles({
        outlineColor: "transparent",
        backgroundColor: {
          lightMode: "inherit",
          darkMode: "inherit",
          lightModeHover: "backgroundNatureHoverLight",
          darkModeHover: "backgroundNatureHoverDark",
          lightModePressed: "backgroundNaturePressedLight",
          darkModePressed: "backgroundNaturePressedDark",
          lightModeDisabled: "inherit",
          darkModeDisabled: "inherit",
        },
        color: {
          lightMode: "secondaryTextLight",
          darkMode: "secondaryTextDark",
          lightModePressed: "inverseTextLight",
          darkModePressed: "inverseTextDark",
          lightModeDisabled: "tertiaryDisabledTextLight",
          darkModeDisabled: "tertiaryDisabledTextDark",
        },
      }),
      danger: sprinkles({
        outlineColor: "transparent",
        backgroundColor: {
          lightMode: "backgroundDangerLight",
          darkMode: "backgroundDangerDark",
          lightModeHover: "backgroundDangerHoverLight",
          darkModeHover: "backgroundDangerHoverDark",
          lightModePressed: "backgroundDangerPressedLight",
          darkModePressed: "backgroundDangerPressedDark",
          lightModeDisabled: "backgroundDangerDisabledLight",
          darkModeDisabled: "backgroundDangerDisabledDark",
        },
        color: {
          lightMode: "inverseTextLight",
          darkMode: "inverseTextDark",
          lightModeDisabled: "inverseTextSecondaryLight",
          darkModeDisabled: "inverseTextSecondaryDark",
        },
      }),
      dangerText: sprinkles({
        outlineColor: "transparent",
        backgroundColor: {
          lightMode: "inherit",
          darkMode: "inherit",
          lightModeHover: "backgroundDangerTextHoverLight",
          darkModeHover: "backgroundDangerTextHoverDark",
          lightModePressed: "backgroundDangerTextPressedLight",
          darkModePressed: "backgroundDangerTextPressedDark",
          lightModeDisabled: "inherit",
          darkModeDisabled: "inherit",
        },
        color: {
          lightMode: "alertTextLight",
          darkMode: "alertTextDark",
          lightModePressed: "inverseTextLight",
          darkModePressed: "inverseTextDark",
          lightModeDisabled: "alertTextDisabledLight",
          darkModeDisabled: "alertTextDisabledDark",
        },
      }),
    },
  },
  defaultVariants: {
    size: "default",
    variant: "primary",
  },
});

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const button = recipe({
  base: [
    {
      fontSize: "80%",
      fontFamily: "inherit",
      textAlign: "center",
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "24px",
      textDecoration: "none",
      transition: "opacity .2s ease-out",
      ":disabled": {
        cursor: "not-allowed",
        opacity: 0.38,
      },
      selectors: {
        "&:hover:not(:disabled)": {
          cursor: "pointer",
        },
        "&:active:not(:disabled)": {
          opacity: 0.2,
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
      xs: { width: "60px" },
      sm: { width: "80px" },
      md: { width: "180px" },
      lg: { width: "280px" },
    },
    variant: {
      filled: sprinkles({
        borderColor: {
          lightMode: "primaryLight",
          darkMode: "primaryDark",
        },
        backgroundColor: {
          lightMode: "primaryLight",
          darkMode: "primaryDark",
        },
        color: {
          lightMode: "brandPrimaryTextLight",
          darkMode: "brandPrimaryTextLight",
        },
      }),
      outlined: sprinkles({
        borderColor: {
          lightMode: "primaryLight",
          darkMode: "primaryDark",
        },
        backgroundColor: "inherit",
        color: {
          lightMode: "primaryLight",
          darkMode: "primaryDark",
        },
      }),
      text: sprinkles({
        borderColor: "transparent",
        backgroundColor: "inherit",
        color: {
          lightMode: "primaryTextLight",
          darkMode: "primaryTextDark",
        },
      }),
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

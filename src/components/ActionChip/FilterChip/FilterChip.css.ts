import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../tokens/sprinkles.css";

export const filterChip = recipe({
  base: [
    {
      borderRadius: "16px",
      cursor: "pointer",
      selectors: {
        "&:hover": {
          opacity: 0.7,
        },
      },
    },
    sprinkles({
      paddingTop: "none",
      paddingBottom: "none",
      paddingLeft: "sm",
      paddingRight: "sm",
      margin: "none",
    }),
  ],
  variants: {
    active: {
      true: sprinkles({
        backgroundColor: {
          lightMode: "backgroundActiveLight",
          darkMode: "backgroundActiveDark",
        },
      }),
      false: sprinkles({
        backgroundColor: {
          lightMode: "backgroundSubtleLight",
          darkMode: "backgroundSubtleDark",
        },
      }),
    },
  },
  defaultVariants: {
    active: false,
  },
});

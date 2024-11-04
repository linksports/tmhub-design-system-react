import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../tokens/sprinkles.css";

export const suggestionChip = recipe({
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
    type: {
      blue: sprinkles({
        backgroundColor: {
          lightMode: "backgroundChipBlueLight",
          darkMode: "backgroundChipBlueDark",
        },
      }),
      orange: sprinkles({
        backgroundColor: {
          lightMode: "backgroundChipOrangeLight",
          darkMode: "backgroundChipOrangeDark",
        },
      }),
      green: sprinkles({
        backgroundColor: {
          lightMode: "backgroundChipGreenLight",
          darkMode: "backgroundChipGreenDark",
        },
      }),
    },
  },
  defaultVariants: {},
});

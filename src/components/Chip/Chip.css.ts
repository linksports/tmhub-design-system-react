import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const chip = recipe({
  base: [
    {
      borderRadius: "16px",
      outlineOffset: "-1px",
      outlineWidth: "1px",
      outlineStyle: "solid",
    },
    sprinkles({
      paddingTop: "2xs",
      paddingBottom: "2xs",
      paddingLeft: "xs",
      paddingRight: "xs",
      margin: "none",
    }),
  ],
  variants: {
    type: {
      gray: sprinkles({
        outlineColor: {
          lightMode: "borderChipGrayLight",
          darkMode: "borderChipGrayDark",
        },
      }),
      blue: sprinkles({
        outlineColor: {
          lightMode: "borderChipBlueLight",
          darkMode: "borderChipBlueDark",
        },
      }),
      orange: sprinkles({
        outlineColor: {
          lightMode: "borderChipOrangeLight",
          darkMode: "borderChipOrangeDark",
        },
      }),
      green: sprinkles({
        outlineColor: {
          lightMode: "borderChipGreenLight",
          darkMode: "borderChipGreenDark",
        },
      }),
    },
    filled: {
      false: sprinkles({
        backgroundColor: "inherit",
      }),
    },
  },
  compoundVariants: [
    {
      variants: { type: "gray", filled: true },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundChipGrayLight",
          darkMode: "backgroundChipGrayDark",
        },
      }),
    },
    {
      variants: { type: "blue", filled: true },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundChipBlueLight",
          darkMode: "backgroundChipBlueDark",
        },
      }),
    },
    {
      variants: { type: "orange", filled: true },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundChipOrangeLight",
          darkMode: "backgroundChipOrangeDark",
        },
      }),
    },
    {
      variants: { type: "green", filled: true },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundChipGreenLight",
          darkMode: "backgroundChipGreenDark",
        },
      }),
    },
  ],
  defaultVariants: {
    filled: false,
  },
});

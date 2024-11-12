import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const labelRecipe = recipe({
  base: [
    {
      borderRadius: "4px",
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
    bold: {
      true: {},
      false: {
        outlineOffset: "-1px",
        outlineWidth: "1px",
        outlineStyle: "solid",
      },
    },
    type: {
      default: {},
      gray: {},
      cyan: {},
      orange: {},
      pink: {},
    },
  },
  compoundVariants: [
    {
      variants: { bold: true, type: "default" },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundPrimaryDarkLight",
          darkMode: "backgroundPrimaryDarkDark",
        },
      }),
    },
    {
      variants: { bold: true, type: "cyan" },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundLabelCyanLight",
          darkMode: "backgroundLabelCyanDark",
        },
      }),
    },
    {
      variants: { bold: true, type: "orange" },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundLabelOrangeLight",
          darkMode: "backgroundLabelOrangeDark",
        },
      }),
    },
    {
      variants: { bold: true, type: "gray" },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundLabelGreyLight",
          darkMode: "backgroundLabelGreyDark",
        },
      }),
    },
    {
      variants: { bold: true, type: "pink" },
      style: sprinkles({
        backgroundColor: {
          lightMode: "backgroundLabelPinkLight",
          darkMode: "backgroundLabelPinkDark",
        },
      }),
    },
    {
      variants: { bold: false, type: "default" },
      style: sprinkles({
        outlineColor: {
          lightMode: "borderLabelDefaultLight",
          darkMode: "borderLabelDefaultDark",
        },
      }),
    },
    {
      variants: { bold: false, type: "cyan" },
      style: sprinkles({
        outlineColor: {
          lightMode: "borderLabelCyanLight",
          darkMode: "borderLabelCyanDark",
        },
      }),
    },
    {
      variants: { bold: false, type: "orange" },
      style: sprinkles({
        outlineColor: {
          lightMode: "borderLabelOrangeLight",
          darkMode: "borderLabelOrangeDark",
        },
      }),
    },
    {
      variants: { bold: false, type: "gray" },
      style: sprinkles({
        outlineColor: {
          lightMode: "borderLabelGreyLight",
          darkMode: "borderLabelGreyDark",
        },
      }),
    },
    {
      variants: { bold: false, type: "pink" },
      style: sprinkles({
        outlineColor: {
          lightMode: "borderLabelPinkLight",
          darkMode: "borderLabelPinkDark",
        },
      }),
    },
  ],
  defaultVariants: {
    bold: false,
    type: "default",
  },
});

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";

export const tableRecipe = recipe({
  base: [
    {
      width: "100%",
      borderRadius: "4px",
      outlineOffset: "-1px",
      outlineWidth: "1px",
      outlineStyle: "solid",
      overflow: "scroll",
    },
    sprinkles({
      outlineColor: {
        lightMode: "borderLight",
        darkMode: "borderDark",
      },
    }),
  ],
});

export const firstFlexColumnsRecipe = recipe({
  base: [
    {
      position: "sticky",
      left: 0,
      filter: "drop-shadow(0 0 4px rgb(0 0 0 / 25%))",
    },
  ],
});
export const lastFlexColumnsRecipe = recipe({
  base: [
    {
      position: "sticky",
      right: 0,
      filter: "drop-shadow(0 0 4px rgb(0 0 0 / 25%))",
    },
  ],
});

export const columnRecipe = recipe({
  base: [
    {
      flex: "1 0 auto",
      overflow: "hidden",
    },
  ],
});

export const thRecipe = recipe({
  base: [
    {
      boxSizing: "border-box",
      flex: "1 0 auto",
    },
    sprinkles({
      paddingTop: "2xs",
      paddingBottom: "2xs",
      paddingLeft: "xs",
      paddingRight: "xs",
      backgroundColor: {
        lightMode: "backgroundTableHeadLight",
        darkMode: "backgroundTableHeadDark",
      },
      display: "flex",
    }),
  ],
  variants: {
    align: {
      left: {},
      center: {},
    },
    verticalWriting: {
      true: {
        writingMode: "vertical-rl",
        textOrientation: "upright",
        justifyContent: "center",
        textAlign: "center",
      },
      false: {
        alignItems: "center",
      },
    },
    needsSort: {
      true: {
        cursor: "pointer",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { align: "left", verticalWriting: true },
      style: {
        alignItems: "flex-end",
      },
    },
    {
      variants: { align: "center", verticalWriting: true },
      style: {
        alignItems: "center",
      },
    },
    {
      variants: { align: "left", verticalWriting: false },
      style: {
        justifyContent: "flex-start",
      },
    },
    {
      variants: { align: "center", verticalWriting: false },
      style: {
        justifyContent: "center",
      },
    },
  ],
  defaultVariants: {
    align: "center",
    verticalWriting: false,
    needsSort: false,
  },
});

export const thSortIconRecipe = recipe({
  base: [
    sprinkles({
      padding: "2xs",
    }),
  ],
});

export const tdRecipe = recipe({
  base: [
    {
      boxSizing: "border-box",
      flex: "0 0 auto",
      height: "40px",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
    },
    sprinkles({
      paddingLeft: "xs",
      paddingRight: "xs",
      borderColor: {
        lightMode: "borderLight",
        darkMode: "borderDark",
      },
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
  variants: {
    align: {
      left: { alignItems: "flex-start" },
      center: { alignItems: "center" },
    },
    isLastRow: {
      true: { borderWidth: 0 },
    },
  },
  defaultVariants: {
    align: "center",
  },
});

export const tdTextWrapperRecipe = recipe({
  base: [
    {
      width: "100%",
      flexGrow: 1,
      alignItems: "center",
    },
    sprinkles({
      display: "flex",
    }),
  ],
  variants: {
    align: {
      left: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
    },
  },
});

export const tdTextRecipe = recipe({
  base: [
    {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  ],
});

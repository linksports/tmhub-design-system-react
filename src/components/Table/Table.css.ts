import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const containerRecipe = recipe({
  base: [
    {
      width: "100%",
      overflow: "scroll",
      borderRadius: "4px",
      position: "relative",
      outlineWidth: "1px",
      outlineStyle: "solid",
    },
    sprinkles({
      outlineColor: {
        lightMode: "borderLight",
        darkMode: "borderDark",
      },
    }),
  ],
});

export const scrollAreaRecipe = recipe({
  base: [
    {
      width: "100%",
      overflow: "scroll",
      position: "relative",
    },
  ],
});

export const tableRecipe = recipe({
  base: [
    {
      position: "relative",
      borderCollapse: "collapse",
      borderSpacing: 0,
      tableLayout: "auto",
      width: "100%",
      border: "none",
      whiteSpace: "nowrap",
    },
  ],
});
export const tableStyle = style({});
globalStyle(`${tableStyle} tbody tr:last-child td`, {
  borderBottomWidth: "0",
});

export const stickyColumnsRecipe = recipe({
  base: [
    {
      position: "sticky",
      zIndex: 1,
    },
  ],
});

export const leftShadowRecipe = recipe({
  base: [
    {
      selectors: {
        "&::after": {
          position: "absolute",
          content: "",
          top: 0,
          right: "-4px",
          width: "4px",
          background: `linear-gradient(
              to right,
              rgba(0, 0, 0, 0.25) 0%,
              rgba(0, 0, 0, 0.15) 30%,
              rgba(0, 0, 0, 0.05) 70%,
              rgba(0, 0, 0, 0) 100%
            )`,
          height: "100%",
          zIndex: 1,
        },
      },
    },
  ],
});

export const rightShadowRecipe = recipe({
  base: [
    {
      selectors: {
        "&::after": {
          position: "absolute",
          content: "",
          top: 0,
          left: "-4px",
          width: "4px",
          background: `linear-gradient(
              to left,
              rgba(0, 0, 0, 0.25) 0%,
              rgba(0, 0, 0, 0.15) 30%,
              rgba(0, 0, 0, 0.05) 70%,
              rgba(0, 0, 0, 0) 100%
            )`,
          height: "100%",
          zIndex: 1,
        },
      },
    },
  ],
});

export const cellTextContainerRecipe = recipe({
  base: [
    {
      boxSizing: "border-box",
      width: "100%",
      overflow: "hidden",
    },
  ],
  variants: {
    align: {
      left: {},
      center: {},
      right: {},
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
      variants: { align: "right", verticalWriting: true },
      style: {
        alignItems: "flex-start",
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
    {
      variants: { align: "right", verticalWriting: false },
      style: {
        justifyContent: "flex-end",
      },
    },
  ],
  defaultVariants: {
    align: "center",
    verticalWriting: false,
  },
});

export const cellTextRecipe = recipe({
  base: [
    {
      boxSizing: "border-box",
      flex: "1 0 auto",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
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

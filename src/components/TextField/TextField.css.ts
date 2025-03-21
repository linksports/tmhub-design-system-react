import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../tokens/sprinkles.css";
import { vars } from "../../tokens/vars.css";

export const textFieldLabelStyle = style({});

export const textFieldContainerRecipe = recipe({
  base: [
    {},
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
});

export const textFieldRecipe = recipe({
  base: [
    {
      borderRadius: "4px",
      outlineOffset: "-1px",
      outlineWidth: "1px",
      outlineStyle: "solid",
      cursor: "pointer",
      position: "relative",
      selectors: {
        "&:focus-within": {
          outlineWidth: "2px",
          outlineOffset: "-2px",
        },
      },
    },
  ],
  variants: {
    hasError: {
      true: sprinkles({
        outlineColor: {
          lightMode: "errorLight",
          darkMode: "errorDark",
        },
      }),
      false: sprinkles({
        outlineColor: {
          lightMode: "borderInputLight",
          darkMode: "borderInputDark",
          lightModeFocus: "borderInputActiveLight",
          darkModeFocus: "borderInputActiveDark",
          lightModeHover: "borderBoldLight",
          darkModeHover: "borderBoldDark",
        },
      }),
    },
    disabled: {
      true: sprinkles({
        outlineColor: {
          lightMode: "borderBoldDisabledLight",
          darkMode: "borderBoldDisabledDark",
        },
      }),
    },
  },
  compoundVariants: [
    {
      variants: { disabled: true },
      style: {
        cursor: "default",
      },
    },
  ],
  defaultVariants: {
    hasError: false,
    disabled: false,
  },
});

export const textFieldLabelRecipe = recipe({
  base: [
    {
      position: "absolute",
      fontSize: "16px",
      lineHeight: 1.5,
      transition: "all 0.25s",
      top: "16px",
      left: "16px",
      selectors: {
        "label:focus-within > &": {
          fontSize: "12px",
          lineHeight: 1,
          top: "-6px",
          left: "12px",
          paddingLeft: vars.spacing["2xs"],
          paddingRight: vars.spacing["2xs"],
        },
      },
    },
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
  variants: {
    hasValue: {
      true: {
        fontSize: "12px",
        lineHeight: 1,
        top: "-6px",
        left: "12px",
        paddingLeft: vars.spacing["2xs"],
        paddingRight: vars.spacing["2xs"],
      },
    },
    disabled: {
      true: sprinkles({
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
      false: sprinkles({
        color: {
          lightMode: "secondaryTextLight",
          darkMode: "secondaryTextDark",
        },
      }),
    },
  },
  defaultVariants: {
    hasValue: false,
    disabled: false,
  },
});

export const textFieldTextareaRecipe = recipe({
  base: [
    {
      flex: "1",
      boxSizing: "border-box",
      cursor: "text",
      height: "auto",
      minHeight: "128px",
      maxHeight: "256px",
      resize: "none",
      outlineWidth: 0,
      borderWidth: 0,
      ["fieldSizing" as string]: "content", // FIXME: type StyleRuleにfieldSizingがないため、asでcast
      selectors: {
        [`label:has(.${textFieldLabelStyle}) > &:not(:focus-within)::placeholder`]:
          {
            color: "transparent",
          },
      },
    },
    sprinkles({
      padding: "md",
      margin: "none",
    }),
  ],
  variants: {
    disabled: {
      true: sprinkles({
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
      false: sprinkles({
        color: {
          lightMode: "primaryTextLight",
          darkMode: "primaryTextDark",
          lightModePlaceholder: "secondaryTextLight",
          darkModePlaceholder: "secondaryTextDark",
        },
      }),
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const bottomTextContainerRecipe = recipe({
  variants: {
    disabled: {
      true: sprinkles({
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
      false: sprinkles({
        color: {
          lightMode: "secondaryTextLight",
          darkMode: "secondaryTextDark",
        },
      }),
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const supportTextRecipe = recipe({
  base: [
    {
      flex: "1",
      minWidth: 0,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    sprinkles({
      paddingLeft: "md",
    }),
  ],
});

export const countTextRecipe = recipe({
  base: [
    {
      marginLeft: "auto",
    },
  ],
});

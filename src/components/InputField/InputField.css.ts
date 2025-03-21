import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../tokens/sprinkles.css";
import { vars } from "../../tokens/vars.css";

export const inputFieldLabelStyle = style({});

export const inputFieldContainerRecipe = recipe({
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

export const inputFieldRecipe = recipe({
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
    sprinkles({
      padding: "md",
      margin: "none",
    }),
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

export const inputFieldLabelRecipe = recipe({
  base: [
    {
      position: "absolute",
      fontSize: "16px",
      lineHeight: 1.5,
      transition: "all 0.25s",
      selectors: {
        "label:focus-within > &": {
          fontSize: "12px",
          lineHeight: 1,
          transform: "translate(-4px, -28px)",
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
        transform: "translate(-4px, -28px)",
        paddingLeft: vars.spacing["2xs"],
        paddingRight: vars.spacing["2xs"],
      },
    },
    hasLeadingIcon: {
      true: {
        fontSize: "12px",
        lineHeight: 1,
        transform: "translate(-4px, -28px)",
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
    hasLeadingIcon: false,
    disabled: false,
  },
});

export const inputFieldInputRecipe = recipe({
  base: [
    {
      flex: "1 0 0",
      cursor: "text",
      selectors: {
        [`label:has(.${inputFieldLabelStyle}) > &:not(:focus-within)::placeholder`]:
          {
            color: "transparent",
          },
      },
    },
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

export const iconContainerRecipe = recipe({
  base: [
    {
      width: "24px",
      height: "24px",
    },
  ],
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

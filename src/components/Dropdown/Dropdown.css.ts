import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../tokens/sprinkles.css";
import { vars } from "../../tokens/vars.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { Property } from "csstype";

export const dropdownContainerRecipe = recipe({
  base: [
    {
      position: "relative",
    },
    sprinkles({
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
});

export const dropdownTriggerRecipe = recipe({
  base: [
    {
      borderRadius: "4px",
      outlineOffset: "-1px",
      outlineWidth: "1px",
      outlineStyle: "solid",
      cursor: "pointer",
      position: "relative",
      selectors: {
        '&:focus-within, &[data-state="open"]': {
          outlineWidth: "2px",
          outlineOffset: "-2px",
        },
      },
    },
    sprinkles({
      color: {
        lightMode: "secondaryTextLight",
        darkMode: "secondaryTextDark",
      },
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
          lightModeHover: "borderBoldLight",
          darkModeHover: "borderBoldDark",
          lightModeFocus: "borderInputActiveLight",
          darkModeFocus: "borderInputActiveDark",
          lightModeOpen: "borderInputActiveLight",
          darkModeOpen: "borderInputActiveDark",
        },
      }),
    },
    disabled: {
      true: sprinkles({
        outlineColor: {
          lightModeDisabled: "borderBoldDisabledLight",
          darkModeDisabled: "borderBoldDisabledDark",
        },
        color: {
          lightModeDisabled: "tertiaryDisabledTextLight",
          darkModeDisabled: "tertiaryDisabledTextDark",
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

export const dropdownTriggerStyle = style({});

export const dropdownTriggerIconRecipe = recipe({
  base: [
    {
      transition: "transform.2s ease-out",
      selectors: {
        '[data-state="open"] &': {
          transform: "rotate(180deg)",
        },
      },
    },
  ],
});

export const dropdownLabelRecipe = recipe({
  base: [
    {
      position: "absolute",
      fontSize: "12px",
      lineHeight: 1,
      transform: "translate(-4px, -28px)",
      paddingLeft: vars.spacing["2xs"],
      paddingRight: vars.spacing["2xs"],
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

export const dropdownPlaceholderRecipe = recipe({
  base: [
    sprinkles({
      color: {
        lightMode: "secondaryLight",
        darkMode: "secondaryDark",
      },
    }),
  ],
});

// dropdown menu
globalStyle(`${dropdownTriggerStyle} ~ div`, {
  position: "absolute !important" as Property.Position,
  top: "56px",
  left: "0 !important",
  right: "0 !important",
  minWidth: "auto !important",
  boxSizing: "border-box",
});

export const dropdownOptionContainerRecipe = recipe({
  base: sprinkles({
    boxShadow: "shadow1",
    backgroundColor: {
      lightMode: "backgroundSurfaceLight",
      darkMode: "backgroundSurfaceDark",
    },
  }),
});

export const dropdownItemRecipe = recipe({
  base: [
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "stretch",
      outline: "none",
      selectors: {
        "&:focus, &:focus-within": {
          outline: "none",
        },
      },
    },
    sprinkles({
      paddingLeft: "xs",
      paddingRight: "xs",
      paddingTop: "2xs",
      paddingBottom: "2xs",
      backgroundColor: {
        lightMode: "backgroundSurfaceLight",
        darkMode: "backgroundSurfaceDark",
      },
    }),
  ],
});

export const dropdownItemTextRecipe = recipe({
  base: [
    {
      flex: 1,
      cursor: "pointer",
      borderRadius: "4px",
      selectors: {
        [`button.${dropdownTriggerStyle} &`]: {
          padding: 0,
        },
      },
    },
    sprinkles({
      paddingLeft: "xs",
      paddingRight: "xs",
      paddingTop: "2xs",
      paddingBottom: "2xs",
    }),
  ],
  variants: {
    disabled: {
      true: sprinkles({
        backgroundColor: {
          lightMode: "inherit",
          darkMode: "inherit",
        },
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
      false: sprinkles({
        backgroundColor: {
          lightModeHover: "backgroundMenuHoverLight",
          darkModeHover: "backgroundMenuHoverDark",
          lightModePressed: "backgroundMenuSelectedLight",
          darkModePressed: "backgroundMenuSelectedDark",
          lightModeItemChecked: "backgroundMenuSelectedLight",
          darkModeItemChecked: "backgroundMenuSelectedDark",
        },
        color: {
          lightMode: "primaryTextLight",
          darkMode: "primaryTextDark",
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
  variants: {
    disabled: {
      true: sprinkles({
        color: {
          lightMode: "tertiaryDisabledTextLight",
          darkMode: "tertiaryDisabledTextDark",
        },
      }),
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const condition_sp = { "@media": "screen and (max-width: 960px)" };
const condition_pc = { "@media": "screen and (min-width: 961px)" };

const responsiveProperties = defineProperties({
  conditions: {
    none: {},
    sp: condition_sp,
    pc: condition_pc,
  },
  defaultCondition: "none",
  properties: {
    display: [
      "none",
      "inline",
      "block",
      "inline-block",
      "flex",
      "none !important",
    ],
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    marginTop: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    gap: vars.spacing,
    columnGap: vars.spacing,
    rowGap: vars.spacing,
    flexDirection: ["column", "column-reverse", "row", "row-reverse"],
    alignItems: ["center", "flex-end", "flex-start", "stretch"],
    justifyContent: ["center", "flex-end", "flex-start", "space-between"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const condition_dark_mode = { "@media": "(prefers-color-scheme: dark)" };
const condition_active = {
  selector: '&[data-state="active"], &[data-state="active"]:hover',
};
const condition_checked = {
  selector: '&[data-state="checked"],&[data-state="checked"]:hover',
};
const condition_item_checked = {
  selector: '[data-state="checked"] > &, [data-state="checked"]:hover > &',
};
const condition_focus = { selector: "&:focus-within" };
const condition_open = { selector: '&[data-state="open"]' };
const condition_hover = { selector: "&:hover" };
const condition_pressed = { selector: "&:active,&:active:hover" };
const condition_disabled = {
  selector: "&:disabled,&:active:disabled,&:active:hover:disabled",
};
const condition_placeholder = { selector: "&::placeholder" };

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: condition_dark_mode,
    lightModeActive: condition_active,
    darkModeActive: { ...condition_dark_mode, ...condition_active },
    lightModeFocus: condition_focus,
    darkModeFocus: { ...condition_dark_mode, ...condition_focus },
    lightModeOpen: condition_open,
    darkModeOpen: { ...condition_dark_mode, ...condition_open },
    lightModeHover: condition_hover,
    darkModeHover: { ...condition_dark_mode, ...condition_hover },
    lightModePressed: condition_pressed,
    darkModePressed: { ...condition_dark_mode, ...condition_pressed },
    lightModeDisabled: condition_disabled,
    darkModeDisabled: { ...condition_dark_mode, ...condition_disabled },
    lightModePlaceholder: condition_placeholder,
    darkModePlaceholder: { ...condition_dark_mode, ...condition_placeholder },
    lightModeChecked: condition_checked,
    darkModeChecked: { ...condition_dark_mode, ...condition_checked },
    lightModeItemChecked: condition_item_checked,
    darkModeItemChecked: { ...condition_dark_mode, ...condition_item_checked },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
    outlineColor: vars.color,
  },
});

const boxShadowProperties = defineProperties({
  properties: {
    boxShadow: vars.boxShadow,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  boxShadowProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

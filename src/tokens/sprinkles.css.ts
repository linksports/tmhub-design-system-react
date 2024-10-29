import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const condition_tablet = { "@media": "screen and (min-width: 768px)" };
const condition_desktop = { "@media": "screen and (min-width: 1024px)" };

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: condition_tablet,
    desktop: condition_desktop,
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "inline", "block", "inline-block", "flex"],
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
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
  },
});

const condition_dark_mode = { "@media": "(prefers-color-scheme: dark)" };
const condition_active = { selector: '&[data-state="active"]' };

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: condition_dark_mode,
    lightModeActive: condition_active,
    darkModeActive: { ...condition_dark_mode, ...condition_active },
  },
  defaultCondition: "lightMode",
  properties: {
    color: vars.color,
    backgroundColor: vars.color,
    borderColor: vars.color,
    outlineColor: vars.color,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];

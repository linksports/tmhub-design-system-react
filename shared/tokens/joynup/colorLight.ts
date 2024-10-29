import { Colors } from "../colors.types";
import { addAlpha, primitiveColors } from "./primitiveColors";

export const colorLight: Colors = {
  // color
  primary: primitiveColors.JuGreen400,
  onPrimary: primitiveColors.JuNavy,
  secondary: primitiveColors.JuOrange500,
  onSecondary: primitiveColors.JuWhite,
  tertiary: primitiveColors.JuCyan500,
  onTertiary: primitiveColors.JuWhite,
  error: primitiveColors.JuAlertRed600,
  onError: primitiveColors.JuWhite,
  selector: primitiveColors.JuGreen900,
  selectorDisabled: addAlpha(primitiveColors.JuGreen900, "30%"),
  success: primitiveColors.JuGreen900,
  suggest: primitiveColors.JuOrange500,
  sectionHeader: primitiveColors.JuOrange500,

  // text
  primaryText: primitiveColors.JuNavy,
  secondaryText: addAlpha(primitiveColors.JuNavy, "70%"),
  tertiaryDisabledText: addAlpha(primitiveColors.JuNavy, "42%"),
  hyperlinksText: primitiveColors.JuGreen900,
  emphasisText: primitiveColors.JuOrange800,
  alertText: primitiveColors.JuAlertRed600,
  brandPrimaryText: primitiveColors.JuNavy,
  brandPrimaryDisabledText: addAlpha(primitiveColors.JuNavy, "42%"),
  brandSecondaryText: addAlpha(primitiveColors.JuNavy, "70%"),
  inverseText: addAlpha(primitiveColors.JuWhite, "87%"),
  inverseTextSecondary: addAlpha(primitiveColors.JuWhite, "60%"),
  onDarkText: primitiveColors.JuWhite,

  // background
  background: primitiveColors.BgGray1,
  backgroundSurface: primitiveColors.JuWhite,
  backgroundSurfaceBright: primitiveColors.JuWhite,
  backgroundSubtlest: primitiveColors.BgGray1,
  backgroundSubtler: primitiveColors.BgGray2,
  backgroundSubtle: primitiveColors.BgGray2,
  backgroundBold: primitiveColors.BgGray2,
  backgroundBolder: primitiveColors.BgGray2,
  backgroundBoldest: primitiveColors.BgGray2,
  backgroundSuggest: primitiveColors.JuOrange50,
  backgroundAlert: addAlpha(primitiveColors.JuAlertRed600, "30%"),
  backgroundAlertBolder: addAlpha(primitiveColors.JuAlertRed600, "70%"),
  backgroundPrimary: primitiveColors.JuGreen400,
  backgroundPrimaryHover: addAlpha(primitiveColors.JuGreen400, "70%"),
  backgroundPrimaryPressed: primitiveColors.JuGreen600,
  backgroundPrimaryDisabled: addAlpha(primitiveColors.JuGreen400, "50%"),
  backgroundNeutral: primitiveColors.BgGray1,
  backgroundNatureHover: addAlpha(primitiveColors.JuNavy, "10%"),
  backgroundNaturePressed: addAlpha(primitiveColors.JuNavy, "70%"),
  backgroundMenuHover: primitiveColors.BgGray1,
  backgroundMenuSelected: addAlpha(primitiveColors.JuNavy, "10%"),
  backgroundChipGiftItLater: addAlpha(primitiveColors.JuOrange500, "30%"),
  backgroundChipGift: addAlpha(primitiveColors.JuCyan500, "30%"),
  backgroundChipGray: primitiveColors.BgGray2,
  backgroundChipBlue: primitiveColors.JuCyan50,
  backgroundChipOrange: primitiveColors.JuOrange50,
  backgroundChipGreen: primitiveColors.JuGreen50,
  backgroundActive: primitiveColors.JuCyan100,
  backgroundDefault: primitiveColors.BgGray2,
  backgroundPrimaryDark: primitiveColors.JuGreen900,
  backgroundSecondary: primitiveColors.JuOrange500,
  backgroundTertiary: primitiveColors.JuCyan500,
  backgroundInverse: primitiveColors.BgNavy2,
  backgroundInverseSubtle: addAlpha(primitiveColors.JuNavy, "70%"),
  backgroundBackdrop: addAlpha(primitiveColors.JuNavy, " 50%"),
  backgroundGift: addAlpha(primitiveColors.JuOrange500, "10%"),
  backgroundOnDark: primitiveColors.JuWhite,
  backgroundReview: primitiveColors.JuOrange50,
  backgroundUpdated: addAlpha(primitiveColors.JuGreen400, "10%"),
  backgroundSegmentedControlButtonHover: addAlpha(
    primitiveColors.JuNavy,
    "10%"
  ),
  backgroundSegmentedControlButtonPressed: addAlpha(
    primitiveColors.JuNavy,
    "30%"
  ),
  backgroundTableHead: primitiveColors.BgGray2,
  backgroundLabelCyan: primitiveColors.JuCyan800,
  backgroundLabelOrange: primitiveColors.JuOrange500,
  backgroundLabelGrey: primitiveColors.BgGray5,
  backgroundLabelPink: "#EE0290",

  // border
  border: addAlpha(primitiveColors.JuNavy, "15%"),
  borderBold: addAlpha(primitiveColors.JuNavy, "70%"),
  borderBoldDisabled: addAlpha(primitiveColors.JuNavy, "42%"),
  borderInput: addAlpha(primitiveColors.JuNavy, "42%"),
  borderInputActive: primitiveColors.JuGreen900,
  borderInputDisabled: addAlpha(primitiveColors.JuNavy, "15%"),
  borderInputError: primitiveColors.JuAlertRed600,
  borderActive: primitiveColors.JuGreen900,
  borderInactive: addAlpha(primitiveColors.JuNavy, "15%"),
  borderChipGray: addAlpha(primitiveColors.JuNavy, "15%"),
  borderChipBlue: primitiveColors.JuCyan500,
  borderChipOrange: primitiveColors.JuOrange500,
  borderChipGreen: primitiveColors.JuGreen400,
  borderOnLight: addAlpha(primitiveColors.JuNavy, "15%"),
  borderLabelDefault: primitiveColors.JuGreen900,
  borderLabelCyan: primitiveColors.JuCyan800,
  borderLabelOrange: primitiveColors.JuOrange500,
  borderLabelGrey: primitiveColors.BgGray5,
  borderLabelPink: "#EE0290",
};

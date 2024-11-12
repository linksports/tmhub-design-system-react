export const primitiveColors = {
  // Green
  JuGreen900: "rgb(0 138 28)",
  JuGreen800: "rgb(0 155 46)",
  JuGreen700: "rgb(0 173 59)",
  JuGreen600: "rgb(0 192 72)",
  JuGreen500: "rgb(0 208 83)",
  JuGreen400: "rgb(25 217 111)",
  JuGreen300: "rgb(95 225 139)",
  JuGreen200: "rgb(149 234 174)",
  JuGreen100: "rgb(193 242 206)",
  JuGreen50: "rgb(229 250 235)",

  // Orange
  JuOrange900: "rgb(191 85 29)",
  JuOrange800: "rgb(214 112 33)",
  JuOrange700: "rgb(221 126 36)",
  JuOrange600: "rgb(228 140 40)",
  JuOrange500: "rgb(247 147 30)",
  JuOrange400: "rgb(235 165 61)",
  JuOrange300: "rgb(238 180 91)",
  JuOrange200: "rgb(243 201 136)",
  JuOrange100: "rgb(247 222 182)",
  JuOrange50: "rgb(252 242 226)",

  // Cyan
  JuCyan900: "rgb(0 140 131)",
  JuCyan800: "rgb(0 178 180)",
  JuCyan700: "rgb(0 199 206)",
  JuCyan600: "rgb(0 222 235)",
  JuCyan500: "rgb(0 240 255)",
  JuCyan400: "rgb(0 245 254)",
  JuCyan300: "rgb(0 251 255)",
  JuCyan200: "rgb(25 255 255)",
  JuCyan100: "rgb(156 255 253)",
  JuCyan50: "rgb(217 255 254)",

  // Navy
  JuNavy: "rgb(19 51 76)",

  // Alert Red
  JuAlertRed900: "rgb(164 37 48)",
  JuAlertRed800: "rgb(178 47 59)",
  JuAlertRed700: "rgb(191 53 66)",
  JuAlertRed600: "rgb(209 61 73)",
  JuAlertRed500: "rgb(225 69 76)",
  JuAlertRed400: "rgb(220 85 96)",
  JuAlertRed300: "rgb(210 116 125)",
  JuAlertRed200: "rgb(224 153 161)",
  JuAlertRed100: "rgb(245 205 213)",
  JuAlertRed50: "rgb(250 235 239)",

  // Background
  JuWhite: "rgb(254 254 254)",
  BgGray1: "rgb(242 244 245)",
  BgGray2: "rgb(225 229 232)",
  BgGray3: "rgb(207 213 218)",
  BgGray4: "rgb(190 199 206)",
  BgGray5: "rgb(172 183 192)",
  BgGray6: "rgb(148 162 173)",
  BaseNavy: "rgb(3 13 33)",
  BgNavy1: "rgb(3 24 44)",
  BgNavy2: "rgb(3 36 55)",
  BgNavy3: "rgb(3 47 66)",
  BgNavy4: "rgb(2 63 82)",
  BgNavy5: "rgb(2 81 99)",
  BgNavy6: "rgb(2 99 117)",
};

export const addAlpha = (rgb: string, alpha: string): string => {
  return rgb.replace(")", ` / ${alpha})`);
};

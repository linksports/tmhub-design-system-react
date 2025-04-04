import { recipe } from "@vanilla-extract/recipes";
// import { sprinkles } from "../../../tokens/sprinkles.css";

export const circleButton = recipe({
  base: [
    {
      borderRadius: "50%",
      height: "40px",
      width: "40px",
    },
  ],
});

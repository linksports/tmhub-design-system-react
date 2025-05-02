import { recipe } from "@vanilla-extract/recipes";

export const textLinkRecipe = recipe({
  base: [
    {
      cursor: "pointer",
    },
  ],
});

export const textRecipe = recipe({
  base: [
    {
      selectors: {
        "*:hover > &": {
          textDecoration: "underline",
        },
      },
    },
  ],
});

export const iconRecipe = recipe({
  base: [
    {
      height: "1em !important",
      width: "1em !important",
    },
  ],
});

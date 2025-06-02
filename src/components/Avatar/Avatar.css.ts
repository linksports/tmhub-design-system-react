import { recipe } from "@vanilla-extract/recipes";

export const AvatarContainerRecipe = recipe({
  base: [
    {
      borderRadius: "50%",
      overflow: "hidden",
    },
  ],
  variants: {
    size: {
      sm: { width: "32px", height: "32px" },
      smp: { width: "40px", height: "40px" },
      md: { width: "64px", height: "64px" },
      mdp: { width: "80px", height: "80px" },
      lg: { width: "128px", height: "128px" },
    },
    clickable: {
      true: {
        cursor: "pointer",
      },
    },
  },
  defaultVariants: {
    size: "md",
    clickable: false,
  },
});

export const AvatarRecipe = recipe({
  base: {
    width: "100%",
    height: "100%",
  },
});

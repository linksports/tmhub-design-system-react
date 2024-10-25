import { recipe } from "@vanilla-extract/recipes";

export const icons = recipe({
  variants: {
    size: {
      xxs: { width: "10px", height: "10px" },
      xs: { width: "16px", height: "16px" },
      sm: { width: "20px", height: "20px" },
      md: { width: "24px", height: "24px" },
      ml: { width: "32px", height: "32px" },
      lg: { width: "40px", height: "40px" },
      xl: { width: "56px", height: "56px" },
      xxl: { width: "80px", height: "80px" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

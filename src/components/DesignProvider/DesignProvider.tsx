import { Slot } from "@radix-ui/react-slot";
import { DesignProviderProps } from "./DesignProvider.types";
import {
  joynupDarkTheme,
  joynupLightTheme,
  joynupTheme,
} from "../../tokens/theme.css";
import "../../tokens/reset.css";
import { designProviderRecipe } from "./DesignProvider.css";

const chooseTheme = (theme: string, mode: string) => {
  switch (theme) {
    case "joynup":
      if (mode == "light") {
        return joynupLightTheme;
      } else if (mode == "dark") {
        return joynupDarkTheme;
      }
      return joynupTheme;
  }
  return joynupTheme;
};

const DesignProvider: React.FC<DesignProviderProps> = ({
  asChild = false,
  ...props
}) => {
  const Component = asChild ? Slot : "div";

  const { theme = "teamhub", mode = "auto", className, ...others } = props;

  return (
    <Component
      className={[
        "tmhub-design-system-root",
        chooseTheme(theme, mode),
        designProviderRecipe(),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...others}
    />
  );
};

export default DesignProvider;

import { Slot } from "@radix-ui/react-slot";
import { text as textCss } from "./Text.css";
import { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = ({
  asChild = false,
  fontSize,
  lineHeight,
  fontWeight,
  color,
  style,
  children,
  className,
}) => {
  const Component = asChild ? Slot : "p";
  return (
    <Component
      className={[
        textCss({ fontSize, lineHeight, fontWeight, color }),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Component>
  );
};

export default Text;

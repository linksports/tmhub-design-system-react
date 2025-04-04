import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "./Button.types";
import { button } from "./Button.css";

/**
 * ボタンコンポーネント
 */
const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  ...props
}) => {
  const Component = asChild ? Slot : "button";

  const { size = "default", variant = "primary", ...others } = props;

  return (
    <Component
      className={[button({ size, variant }), className]
        .filter(Boolean)
        .join(" ")}
      {...others}
    />
  );
};

export default Button;

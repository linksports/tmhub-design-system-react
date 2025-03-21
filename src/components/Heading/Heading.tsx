import { Slot } from "@radix-ui/react-slot";
import { headingRecipe } from "./Heading.css";
import { HeadingProps, LevelHTagsMap } from "./Heading.types";

const Heading: React.FC<HeadingProps> = ({
  asChild = false,
  level,
  color,
  style,
  children,
  className,
}) => {
  const Component = asChild ? Slot : LevelHTagsMap[level];
  return (
    <Component
      className={[headingRecipe({ level, color }), className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Component>
  );
};

export default Heading;

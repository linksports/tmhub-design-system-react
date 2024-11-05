import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Slot } from "@radix-ui/react-slot";
import { FlexProps } from "./Flex.types";
import { flex } from "./Flex.css";

const Flex: React.FC<FlexProps> = ({ asChild = false, ...props }) => {
  const {
    as = "div",
    direction,
    align,
    justify,
    display,
    wrap,
    gap,
    gapX,
    gapY,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    p,
    pt,
    pr,
    pl,
    pb,
    style,
    children,
    className,
    ...others
  } = props;

  const Component = asChild ? Slot : as;

  return (
    <Component
      className={[
        flex({
          direction,
          align,
          justify,
          display,
          wrap,
          gap,
          gapX,
          gapY,
          p,
          pt,
          pr,
          pl,
          pb,
        }),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...style,
        ...assignInlineVars({
          width,
          minWidth,
          maxWidth,
          height,
          minHeight,
          maxHeight,
        }),
      }}
      {...others}
    >
      {children}
    </Component>
  );
};

export default Flex;

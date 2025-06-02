import { TextLinkProps } from "./TextLink.types";
import { iconRecipe, textLinkRecipe, textRecipe } from "./TextLink.css";
import Text from "../Text/Text";
import { Flex, Iconography } from "..";

/**
 * ボタンコンポーネント
 */
const TextLink: React.FC<TextLinkProps> = ({
  external,
  as,
  className,
  children,
  ...props
}) => {
  const Component = as ?? "a";

  const { fontSize, color = "hyperlinks", ...others } = props;

  return (
    <Flex asChild align="center" gap={1} display="inline-flex">
      <Component
        className={[textLinkRecipe(), className].filter(Boolean).join(" ")}
        target={external ? "_blank" : undefined}
        {...others}
      >
        <Text
          fontSize={fontSize}
          color={color}
          asChild
          className={textRecipe()}
        >
          <span>{children}</span>
        </Text>

        {external && (
          <Text fontSize={fontSize} color={color} asChild>
            <Iconography.OpenInNew color={color} className={iconRecipe()} />
          </Text>
        )}
      </Component>
    </Flex>
  );
};

export default TextLink;

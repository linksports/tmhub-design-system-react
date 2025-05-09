import { labelRecipe } from "./Label.css";
import { LabelProps } from "./Label.types";
import Text from "../Text";
import Flex from "../Flex";

const Label: React.FC<LabelProps> = ({
  type,
  bold,
  text,
  Icon,
  className,
  ...props
}) => {
  return (
    <Flex
      {...props}
      className={[labelRecipe({ type, bold }), className]
        .filter(Boolean)
        .join(" ")}
      display="inline-flex"
      align="center"
      height="22px"
      gap={2}
    >
      {Icon && Icon}
      <Text
        lineHeight="none"
        color={bold ? "inverse" : "primary"}
        fontSize="sm"
        fontWeight="bold"
      >
        {text}
      </Text>
    </Flex>
  );
};

export default Label;

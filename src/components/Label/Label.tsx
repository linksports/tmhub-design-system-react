import { labelRecipe } from "./Label.css";
import { LabelProps } from "./Label.types";
import Text from "../Text";
import Flex from "../Flex";
import Box from "../Box";

const Label: React.FC<LabelProps> = ({ type, bold, text, Icon }) => {
  return (
    <Flex asChild display="inline-flex" align="center" height="22px" gap={2}>
      <Box className={labelRecipe({ type, bold })}>
        {Icon && Icon}
        <Text
          lineHeight="None"
          color={bold ? "inverse" : "primary"}
          fontSize="S"
          fontWeight="Bold"
        >
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default Label;

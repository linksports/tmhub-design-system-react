import { chip } from "./Chip.css";
import { ChipProps } from "./Chip.types";
import Text from "../Text";
import Flex from "../Flex";
import Box from "../Box";

const Chip: React.FC<ChipProps> = ({ type, filled, text, Icon }) => {
  return (
    <Flex asChild display="inline-flex" align="center" height="22px" gap={2}>
      <Box className={chip({ type, filled })}>
        {Icon && Icon}
        <Text
          lineHeight="none"
          color="primary"
          fontSize="sm"
          fontWeight="regular"
        >
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default Chip;

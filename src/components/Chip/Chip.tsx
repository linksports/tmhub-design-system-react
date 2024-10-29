import { chip } from "./Chip.css";
import { ChipProps } from "./Chip.types";
import Text from "../Text";
import Flex from "../Flex";
import Box from "../Box";

const Chip: React.FC<ChipProps> = ({ type, filled, children }) => {
  return (
    <Flex asChild display="inline-flex" align="center">
      <Box className={chip({ type, filled })}>
        <Text
          lineHeight="None"
          color="primary"
          fontSize="S"
          fontWeight="Regular"
        >
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

export default Chip;

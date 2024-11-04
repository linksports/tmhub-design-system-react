import { suggestionChip } from "./SuggestionChip.css";
import { SuggestionChipProps } from "./SuggestionChip.types";
import Text from "../../Text";
import Flex from "../../Flex";

const SuggestionChip: React.FC<SuggestionChipProps> = ({
  type,
  text,
  Icon,
  onClick,
}) => {
  return (
    <Flex asChild display="inline-flex" align="center" height="32px" gap={3}>
      <button className={suggestionChip({ type })} onClick={onClick}>
        {Icon && Icon}
        <Text
          lineHeight="None"
          color="primary"
          fontSize="M"
          fontWeight="Regular"
        >
          {text}
        </Text>
      </button>
    </Flex>
  );
};

export default SuggestionChip;

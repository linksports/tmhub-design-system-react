import { filterChip } from "./FilterChip.css";
import { FilterChipProps } from "./FilterChip.types";
import Text from "../../Text";
import Flex from "../../Flex";

const FilterChip: React.FC<FilterChipProps> = ({
  active,
  text,
  Icon,
  onClick,
}) => {
  return (
    <Flex asChild display="inline-flex" align="center" height="32px" gap={3}>
      <button className={filterChip({ active })} onClick={onClick}>
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

export default FilterChip;

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
          lineHeight="none"
          color="primary"
          fontSize="md"
          fontWeight="regular"
        >
          {text}
        </Text>
      </button>
    </Flex>
  );
};

export default FilterChip;

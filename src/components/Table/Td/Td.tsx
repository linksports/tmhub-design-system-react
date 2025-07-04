import classNames from "classnames";
import Text from "../../Text";
import {
  cellTextContainerRecipe,
  leftShadowRecipe,
  rightShadowRecipe,
  stickyColumnsRecipe,
} from "../Table.css";
import { useTableContext } from "../TableContext/TableContext";
import { TableContextType } from "../TableContext/TableContext.types";
import { tdRecipe, tdTextRecipe } from "./Td.css";
import { TdProps } from "./Td.types";
import Flex from "../../Flex";

export const Td: React.FC<TdProps> = ({
  index,
  textProps,
  children,
  className,
  style,
  ...otherProps
}) => {
  const { offsets, fixedColumn, columnNum } = useTableContext();
  const { isLeft, isRight, stickyOffset } = useTd({
    index,
    fixedColumn,
    offsets,
    columnNum,
  });

  return (
    <td
      {...otherProps}
      className={classNames(
        tdRecipe(),
        ...(isLeft || isRight
          ? [
              stickyColumnsRecipe(),
              isLeft ? leftShadowRecipe() : rightShadowRecipe(),
            ]
          : []),
        className
      )}
      style={{
        ...style,
        ...(isLeft
          ? {
              left: stickyOffset,
            }
          : {
              right: stickyOffset,
            }),
      }}
    >
      {typeof children != "object" ? (
        <Flex
          className={cellTextContainerRecipe({
            align: textProps?.textAlign,
            verticalWriting: textProps?.verticalWriting,
          })}
          justify="unset"
        >
          <Text
            fontSize="md"
            color="primary"
            fontWeight="regular"
            lineHeight="normal"
            className={classNames(tdTextRecipe())}
          >
            {children}
          </Text>
        </Flex>
      ) : (
        <>{children}</>
      )}
    </td>
  );
};

type TdHooksProps = Omit<TableContextType, "refs"> & {
  index: number;
};

export const useTd = ({
  index,
  fixedColumn,
  offsets,
  columnNum,
}: TdHooksProps): {
  isLeft?: boolean;
  isRight?: boolean;
  stickyOffset?: number;
} => {
  if (!fixedColumn) return {};

  const { left = 0, right = 0 } = fixedColumn;
  const isLeft = index < left;
  const isRight = index >= columnNum - right;

  if (isLeft) {
    return {
      isLeft,
      stickyOffset: offsets.leftStickyOffsets[index],
    };
  }

  if (isRight) {
    const rightIndex = index - (columnNum - right);
    return {
      isRight,
      stickyOffset: offsets.rightStickyOffsets[rightIndex],
    };
  }

  return {};
};

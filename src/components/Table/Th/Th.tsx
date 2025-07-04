"use client";
import classNames from "classnames";
import Flex from "../../Flex";
import { Iconography } from "../../Icons";
import Text from "../../Text";
import {
  cellTextContainerRecipe,
  leftShadowRecipe,
  rightShadowRecipe,
  stickyColumnsRecipe,
} from "../Table.css";
import { useTableContext } from "../TableContext/TableContext";
import { TableContextType } from "../TableContext/TableContext.types";
import { thRecipe, thSortIconRecipe } from "./Th.css";
import { ThProps } from "./Th.types";

export const Th: React.FC<ThProps> = ({
  index,
  textAlign,
  verticalWriting,
  needsSortLabel,
  children,
  className,
  style,
  ...otherProps
}) => {
  const { offsets, refs, fixedColumn, columnNum } = useTableContext();
  const { ref, isLeft, isRight, stickyOffset } = useTh({
    index,
    refs,
    fixedColumn,
    offsets,
    columnNum,
  });

  return (
    <th
      {...otherProps}
      ref={ref}
      className={classNames(
        thRecipe({
          needsSort: needsSortLabel,
        }),
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
      <Flex
        className={cellTextContainerRecipe({
          align: textAlign,
          verticalWriting: verticalWriting,
        })}
        justify="unset"
      >
        <Text
          fontSize="md"
          color="primary"
          fontWeight="bold"
          lineHeight="normal"
        >
          {children}
        </Text>
        {needsSortLabel && (
          <Iconography.Sort className={thSortIconRecipe()} size="xs" />
        )}
      </Flex>
    </th>
  );
};

type ThHooksProps = TableContextType & {
  index: number;
};

export const useTh = ({
  index,
  fixedColumn,
  refs,
  offsets,
  columnNum,
}: ThHooksProps): {
  ref?: React.Ref<HTMLTableCellElement>;
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
      ref: (el) => {
        refs.leftCellRefs.current[index] = el;
      },
      isLeft,
      stickyOffset: offsets.leftStickyOffsets[index],
    };
  }

  if (isRight) {
    const rightIndex = index - (columnNum - right);
    return {
      ref: (el) => {
        refs.rightCellRefs.current[rightIndex] = el;
      },
      isRight,
      stickyOffset: offsets.rightStickyOffsets[rightIndex],
    };
  }

  return {};
};

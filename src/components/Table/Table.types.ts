export type TableProps = {
  fixedColumn?: {
    left?: number;
    right?: number;
  };
  columnNum: number;
  containerProps?: React.ComponentProps<"div">;
} & React.ComponentProps<"table">;

export type TheadProps = React.ComponentProps<"thead">;
export type TbodyProps = React.ComponentProps<"tbody">;
export type TrProps = React.ComponentProps<"tr">;

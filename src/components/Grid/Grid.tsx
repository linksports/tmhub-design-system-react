import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Slot } from '@radix-ui/react-slot';
import { GridProps } from './Grid.types';
import { grid } from './Grid.css';

const Grid: React.FC<GridProps> = ({
  asChild = false,
  ...props
}) => {
  const {
    as = 'div',
    display,
    columns,
    rows,
    flow,
    align,
    justify,
    gap,
    gapX,
    gapY,
    p,
    pt,
    pr,
    pl,
    pb,
    style,
    children,
    ...others
  } = props;

  const Component = asChild ? Slot : as;

  const tempColumns = (typeof columns != 'string' ? columns : undefined);
  const tempRows = (typeof rows != 'string' ? rows : undefined);

  return (
    <Component className={grid({
      tempColumns, tempRows, display, flow, align, justify, gap, gapX, gapY, p, pt, pr, pl, pb,
    })} style={{ ...style, ...assignInlineVars({
      gridTemplateColumns: (tempColumns ? null : columns as string),
      gridTemplateRows: (tempRows ? null : rows as string),
    })}} {...others}>
      {children}
    </Component>
  );
};

export default Grid;

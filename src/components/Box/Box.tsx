import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Slot } from '@radix-ui/react-slot';
import { BoxProps } from './Box.types';
import { box } from './Box.css';
import { convertGridPos } from '../../props/gridItem.props';

const Box: React.FC<BoxProps> = ({
  asChild = false,
  ...props
}) => {
  const {
    as = 'div',
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridRow,
    gridRowStart,
    gridRowEnd,
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

  return (
    <Component className={box({
      p, pt, pr, pl, pb,
    })} style={{ ...style, ...assignInlineVars({
      gridColumn: convertGridPos(gridColumn, gridColumnStart, gridColumnEnd),
      gridRow: convertGridPos(gridRow, gridRowStart, gridRowEnd),
    })}} {...others}>
      {children}
    </Component>
  );
};

export default Box;

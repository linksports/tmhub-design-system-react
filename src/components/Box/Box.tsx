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
    flexBasis,
    flexGrow,
    flexShrink,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridRow,
    gridRowStart,
    gridRowEnd,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
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
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      flexBasis,
      flexGrow,
      flexShrink,
      gridColumn: convertGridPos(gridColumn, gridColumnStart, gridColumnEnd),
      gridRow: convertGridPos(gridRow, gridRowStart, gridRowEnd),
    })}} {...others}>
      {children}
    </Component>
  );
};

export default Box;

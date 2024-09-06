import { Slot } from '@radix-ui/react-slot';
import { FlexProps } from './Flex.types';
import { flex } from './Flex.css';

const Flex: React.FC<FlexProps> = ({
  asChild = false,
  ...props
}) => {
  const {
    as = 'div',
    align,
    justify,
    wrap,
    gap,
    gapX,
    gapY,
    p,
    pt,
    pr,
    pl,
    pb,
    children,
    ...others
  } = props;

  const Component = asChild ? Slot : as;

  return (
    <Component className={flex({
      align, justify, wrap, gap, gapX, gapY, p, pt, pr, pl, pb,
    })} {...others}>
      {children}
    </Component>
  );
};

export default Flex;

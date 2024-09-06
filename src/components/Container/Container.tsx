import { Slot } from '@radix-ui/react-slot';
import { ContainerProps } from './Container.types';
import { container, containerInner } from './Container.css';

const Container: React.FC<ContainerProps> = ({
  asChild = false,
  ...props
}) => {
  const {
    size,
    align,
    p,
    pt,
    pr,
    pl,
    pb,
    children,
    ...others
  } = props;

  const Component = asChild ? Slot : 'div';

  return (
    <div className={container({
      align,
    })}>
      <Component className={containerInner({
        size, p, pt, pr, pl, pb,
      })} {...others}>
        {children}
      </Component>
    </div>
  );
};

export default Container;

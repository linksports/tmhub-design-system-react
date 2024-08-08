import { Slot } from '@radix-ui/react-slot';
import { AsChildProps } from '../../util/AsChildProps';
import { ButtonProps } from './Button.types';

export function runtimeComponent(className) {
  const Button: React.FC<AsChildProps<ButtonProps, "button">> = ({
    asChild = false,
    ...props
  }) => {
    const Component = asChild ? Slot : "button";
  
    const {
      size = 'md',
      variant = 'filled',
      ...others
    } = props;
  
    return (
      <Component className={className} {...others} />
    );
  };
  return Button;
};

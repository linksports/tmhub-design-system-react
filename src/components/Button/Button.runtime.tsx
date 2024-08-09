import { Slot } from '@radix-ui/react-slot';
import { AsChildProps } from '../../util/AsChildProps';
import { ButtonProps } from './Button.types';

export function runtimeComponent(className: string) {
  const Button: React.FC<AsChildProps<ButtonProps, "button">> = ({
    asChild = false,
    ...props
  }) => {
    const Component = asChild ? Slot : "button";
  
    return (
      <Component className={className} />
    );
  };
  return Button;
};

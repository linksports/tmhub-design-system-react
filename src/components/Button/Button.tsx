/*
import { addFunctionSerializer } from '@vanilla-extract/css/functionSerializer';
import { runtimeComponent } from './Button.runtime';
import { ButtonProps } from './Button.types';
import { buttonRecipe } from './Button.css';

const Button = (props: ButtonProps) => {
  const {
    size = 'md',
    variant = 'filled',
    ...others
  } = props;
  
  const className = buttonRecipe({
    size: size,
    variant: variant,
  });
  const args: readonly string[] = [className];

  const Component = runtimeComponent(className);

  addFunctionSerializer(Component, {
    importPath: './Button.runtime',
    importName: 'runtimeComponent',
    args: args,
  });

  return Component(others);;
};

export default Button;
*/

import { Slot } from '@radix-ui/react-slot';
import { AsChildProps } from '../../util/AsChildProps';
import { ButtonProps } from './Button.types';
import button from './Button.css';

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
    <Component className={button({
      size: size,
      variant: variant,
    })} {...others} />
  );
};

export default Button;

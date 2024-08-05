import { Slot } from '@radix-ui/react-slot';
import { AsChildProps } from '../../util/AsChildProps';
import { ButtonProps } from './Button.types';
import { buttonRecipe } from './Button.css';

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
    <Component className={buttonRecipe({
      size: size,
      variant: variant,
    })} {...others} />
  );
};

export default Button;

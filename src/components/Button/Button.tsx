import { Slot } from '@radix-ui/react-slot';
import { AsChildProps } from '../../util/AsChildProps';
import { ButtonProps } from './Button.types';
import { button } from './Button.css';

/**
 * ボタンコンポーネント
 */
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

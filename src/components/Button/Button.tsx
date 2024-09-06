import { Slot } from '@radix-ui/react-slot';
import { ButtonProps } from './Button.types';
import { button } from './Button.css';

/**
 * ボタンコンポーネント
 */
const Button: React.FC<ButtonProps> = ({
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
    <Component className={button({ size, variant })} {...others} />
  );
};

export default Button;

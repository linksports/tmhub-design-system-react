import { ButtonProps } from './Button.types';
import { buttonRecipe } from './Button.css';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = 'md',
    variant = 'filled',
    children,
    ...others
  } = props;

  return (
    <button className={buttonRecipe({
      size: size,
      variant: variant,
    })} {...others}>
      {children}
    </button>
  );
};

export default Button;

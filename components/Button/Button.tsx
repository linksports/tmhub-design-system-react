import { ButtonProps } from './Button.types';
import { buttonRecipe } from './Button.css';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = 'md',
    type = 'filled',
    children,
    ...others
  } = props;

  return (
    <button className={buttonRecipe({
      size: size,
      type: type,
    })} {...others}>
      {children}
    </button>
  );
};

export default Button;

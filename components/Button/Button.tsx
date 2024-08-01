import { ButtonProps } from './Button.types';
import { buttonRecipe } from './Button.css';
// import { buttonBase, buttonSizeSm, buttonSizeMd } from './Button.css';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={buttonRecipe({
      size: props.size,
    })}>
      {props.children}
    </button>
  );
};

export default Button;

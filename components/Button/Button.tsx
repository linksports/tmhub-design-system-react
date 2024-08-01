import { ButtonProps } from './Button.types';
import { buttonBase, buttonSizeSm, buttonSizeMd } from './Button.css';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={[
      buttonBase,
      props.size == 'sm' ? buttonSizeSm : buttonSizeMd,
    ].join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;

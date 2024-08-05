import { Slot } from '@radix-ui/react-slot';
import { AsChildProps } from '../../util/AsChildProps';
import { ButtonProps } from './Button.types';
// import { buttonRecipe } from './Button.css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../tokens/vars.css';

const buttonRecipe = recipe({
  base: {
    padding: `${vars.spacing.md} ${vars.spacing.lg}`,
    border: '2px solid transparent',
    borderRadius: '24px',
    textDecoration: 'none',
    transition: 'opacity .2s ease-out',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.38,
    },
    selectors: {
      '&:hover:not(:disabled)': {
        cursor: 'pointer',
      },
      '&:active:not(:disabled)': {
        opacity: 0.2,
      },
    },
  },
  variants: {
    size: {
      xs: { width: '60px' },
      sm: { width: '80px' },
      md: { width: '180px' },
      lg: { width: '280px' },
    },
    variant: {
      filled: {
        borderColor: vars.color.brand,
        backgroundColor: vars.color.brand,
        color: vars.color.brandInverse,
      },
      outlined: {
        borderColor: vars.color.brand,
        backgroundColor: 'inherit',
        color: vars.color.brand,
      },
      text: {
        borderColor: 'transparent',
        backgroundColor: 'inherit',
        color: vars.color.text.primary,
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'filled',
  },
});

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

import { AsChildProps } from '../../props/asChild.props';

export const sizeValues = ['xs', 'sm', 'md', 'lg'] as const;
export const variantValues = ['filled', 'outlined', 'text'] as const;

type Props = {
  size?: (typeof sizeValues)[number];
  variant?: (typeof variantValues)[number];
  children: React.ReactNode;
} & React.ComponentProps<'button'>;

export type ButtonProps = AsChildProps<Props, 'button'>;

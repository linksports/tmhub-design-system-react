export type ButtonProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outlined' | 'text';
  children: React.ReactNode;
} & React.ComponentProps<'button'>;

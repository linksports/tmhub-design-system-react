export type ButtonProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'filled' | 'outlined' | 'text';
  children: React.ReactNode;
} & React.ComponentProps<'button'>;

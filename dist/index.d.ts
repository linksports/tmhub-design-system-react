type ButtonProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    children: React.ReactNode;
};

declare const Button: React.FC<ButtonProps>;

export { Button };

import { SlotProps } from '@radix-ui/react-slot';
import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

type AsChildProps<Props, DefaultElement extends ElementType> = (ComponentPropsWithoutRef<DefaultElement> & Props & {
    asChild?: false;
}) | (SlotProps & Props & {
    asChild: true;
    children: ReactNode;
});

type DesignProviderProps = {
    theme?: 'teamhub' | 'play' | 'joynup';
    mode?: 'light' | 'dark';
    children?: React.ReactNode;
} & React.ComponentProps<'body'>;

declare const DesignProvider: React.FC<AsChildProps<DesignProviderProps, "body">>;

type ButtonProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'filled' | 'outlined' | 'text';
    children: React.ReactNode;
} & React.ComponentProps<'button'>;

declare const Button: React.FC<AsChildProps<ButtonProps, "button">>;

export { Button, DesignProvider };

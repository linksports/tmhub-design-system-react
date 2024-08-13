import { SlotProps } from '@radix-ui/react-slot';
import * as react from 'react';
import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

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
} & React.ComponentProps<'div'>;

declare const DesignProvider: React.FC<AsChildProps<DesignProviderProps, "div">>;

type ButtonProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'filled' | 'outlined' | 'text';
    children: React.ReactNode;
} & React.ComponentProps<'button'>;

/**
 * ボタンコンポーネント
 */
declare const Button: React.FC<AsChildProps<ButtonProps, "button">>;

declare const _default: {
    Root: react.FC<Tabs.TabsProps>;
    List: react.FC<Tabs.TabsListProps>;
    Trigger: react.FC<Tabs.TabsTriggerProps>;
    Content: react.FC<Tabs.TabsContentProps>;
};

export { Button, DesignProvider, _default as Tabs };

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

declare const paddingValues: readonly [0, 1, 2, 3, 4];
type paddingProps = {
    p?: (typeof paddingValues)[number];
    pt?: (typeof paddingValues)[number];
    pr?: (typeof paddingValues)[number];
    pl?: (typeof paddingValues)[number];
    pb?: (typeof paddingValues)[number];
};

type gridItemProps = {
    gridColumn?: string;
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridRow?: string;
    gridRowStart?: string;
    gridRowEnd?: string;
};

declare const displayValues$1: readonly ["none", "inline", "inline-block", "block"];
type Props$6 = {
    as?: 'div' | 'span';
    display?: (typeof displayValues$1)[number];
    children: React.ReactNode;
} & gridItemProps & paddingProps & React.ComponentProps<'div'>;
type BoxProps = AsChildProps<Props$6, 'div'>;

declare const Box: React.FC<BoxProps>;

declare const sizeValues$1: readonly ["xs", "sm", "md", "lg"];
declare const variantValues: readonly ["filled", "outlined", "text"];
type Props$5 = {
    size?: (typeof sizeValues$1)[number];
    variant?: (typeof variantValues)[number];
    children: React.ReactNode;
} & React.ComponentProps<'button'>;
type ButtonProps = AsChildProps<Props$5, 'button'>;

/**
 * ボタンコンポーネント
 */
declare const Button: React.FC<ButtonProps>;

declare const sizeValues: readonly ["xs", "sm", "md", "lg", "full"];
declare const alignValues$2: readonly ["start", "center", "end"];
type Props$4 = {
    size?: (typeof sizeValues)[number];
    align?: (typeof alignValues$2)[number];
    children: React.ReactNode;
} & paddingProps & React.ComponentProps<'div'>;
type ContainerProps = AsChildProps<Props$4, 'div'>;

declare const Container: React.FC<ContainerProps>;

type Props$3 = {
    theme?: 'teamhub' | 'play' | 'joynup';
    mode?: 'light' | 'dark';
    children?: React.ReactNode;
} & React.ComponentProps<'div'>;
type DesignProviderProps = AsChildProps<Props$3, "div">;

declare const DesignProvider: React.FC<DesignProviderProps>;

declare const gapValues: readonly [0, 1, 2, 3, 4];
type gapProps = {
    gap?: (typeof gapValues)[number];
    gapX?: (typeof gapValues)[number];
    gapY?: (typeof gapValues)[number];
};

declare const alignValues$1: readonly ["start", "center", "end", "baseline", "stretch"];
declare const justifyValues$1: readonly ["start", "center", "end", "between", "around"];
declare const wrapValues: readonly ["nowrap", "wrap", "wrap-reverse"];
type Props$2 = {
    as?: 'div' | 'span';
    align?: (typeof alignValues$1)[number];
    justify?: (typeof justifyValues$1)[number];
    wrap?: (typeof wrapValues)[number];
    children: React.ReactNode;
} & gapProps & paddingProps & React.ComponentProps<'div'>;
type FlexProps = AsChildProps<Props$2, 'div'>;

declare const Flex: React.FC<FlexProps>;

declare const displayValues: readonly ["none", "inline-grid", "grid"];
declare const columnsValues: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9];
declare const rowsValues: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9];
declare const flowValues: readonly ["row", "column", "dense", "row-dense", "column-dense"];
declare const alignValues: readonly ["start", "center", "end", "baseline", "stretch"];
declare const justifyValues: readonly ["start", "center", "end", "between"];
type Props$1 = {
    as?: 'div' | 'span';
    display?: (typeof displayValues)[number];
    columns: string | (typeof columnsValues)[number];
    rows: string | (typeof rowsValues)[number];
    flow?: (typeof flowValues)[number];
    align?: (typeof alignValues)[number];
    justify?: (typeof justifyValues)[number];
} & gapProps & paddingProps & React.ComponentProps<'div'>;
type GridProps = AsChildProps<Props$1, 'div'>;

declare const Grid: React.FC<GridProps>;

type Props = {} & BoxProps;
type PanelProps = Props;

declare const Panel: React.FC<PanelProps>;

declare const _default: {
    Root: react.FC<Tabs.TabsProps>;
    List: react.FC<Tabs.TabsListProps>;
    Trigger: react.FC<Tabs.TabsTriggerProps>;
    Content: react.FC<Tabs.TabsContentProps>;
};

export { Box, Button, Container, DesignProvider, Flex, Grid, Panel, _default as Tabs };

import type { SlotProps } from "@radix-ui/react-slot";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type AsChildProps<
  Props,
  DefaultElement extends ElementType
> =
  | (ComponentPropsWithoutRef<DefaultElement> &
      Props & {
        asChild?: false;
      }
    )
  | (SlotProps &
      Props & {
        asChild: true;
        children: ReactNode;
      }
    );

export const asChildArgTypes = {
  asChild: {
    control: 'boolean',
    description: '子要素をコンポーネントとして利用',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
} as const;

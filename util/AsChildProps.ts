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

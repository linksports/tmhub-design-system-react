import { AsChildProps } from "../../../props/asChild.props";
import { variantValues } from "../Button.types";

type Props = {
  variant?: (typeof variantValues)[number];
  children: React.ReactNode;
} & React.ComponentProps<"button">;

export type CircleButtonProps = AsChildProps<Props, "button">;

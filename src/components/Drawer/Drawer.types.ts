import { Iconography } from "../Icons";
import { LabelProps } from "../Label/Label.types";

export type MenuItemProps = {
  label: string;
  icon: keyof typeof Iconography;
  badge?: string | LabelProps;
  selected?: boolean;
  as?: React.ElementType;
} & React.ComponentProps<"a">;

export type SectionProps = {
  title?: string;
  items: MenuItemProps[];
};

export type DrawerContentProps = {
  sections: SectionProps[];
} & React.ComponentProps<"div">;

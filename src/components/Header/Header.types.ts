import { SectionProps } from "../Drawer/Drawer.types";

export type HeaderProps = {
  logo: React.ReactNode;
  menuSections?: SectionProps[];
  actionButton: React.ReactNode;
  authButton: React.ReactNode;
  contentNavigation?: React.ReactNode;
  position?: "fixed" | "sticky";
} & React.ComponentProps<"div">;

import { TextLinkProps } from "../TextLink/TextLink.types";

export type FooterProps = {
  logo: React.ReactNode;
  menus: TextLinkProps[];
  copyright: string;
} & React.ComponentProps<"div">;

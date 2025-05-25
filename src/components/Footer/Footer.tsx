import React from "react";
import { FooterProps } from "./Footer.types";
import Flex from "../Flex";
import Text from "../Text";
import TextLink from "../TextLink";
import {
  containerRecipe,
  copyrightContainerRecipe,
  menusRecipe,
  topContentRecipe,
} from "./Footer.css";

const Footer: React.FC<FooterProps> = ({
  copyright,
  logo,
  menus,
  className,
  ...otherProps
}) => {
  return (
    <Flex
      {...otherProps}
      className={[containerRecipe(), className].filter(Boolean).join(" ")}
      direction="column"
    >
      <Flex className={topContentRecipe()} justify="between">
        {logo}
        <Flex className={menusRecipe()} wrap="wrap">
          {menus.map((menu) => (
            <TextLink
              {...menu}
              key={String(menu.children)}
              color={menu.color ?? "primary"}
            />
          ))}
        </Flex>
      </Flex>
      <Flex asChild justify="unset" className={copyrightContainerRecipe()}>
        <Text color="secondary" fontSize="sm" lineHeight="normal">
          {copyright}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;

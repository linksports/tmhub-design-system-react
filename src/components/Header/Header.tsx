import React from "react";
import Flex from "../Flex";
import { Drawer } from "../Drawer";
import { HeaderProps } from "./Header.types";
import {
  containerRecipe,
  dividerRecipe,
  menuIconRecipe,
  tabContainerRecipe,
  topHeaderContainerRecipe,
} from "./Header.css";
import { Divider, Icons, TabBar } from "..";

const Header: React.FC<HeaderProps> = ({
  menuSections,
  logo,
  actionButton,
  authButton,
  contentNavigation,
  position,
  className,
  ...otherProps
}) => {
  const menuItems = menuSections?.flatMap((section) => section.items) ?? [];

  return (
    <Drawer.Root>
      <Flex
        direction="column"
        {...otherProps}
        className={[
          containerRecipe({
            position,
          }),
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Flex
          className={topHeaderContainerRecipe()}
          justify="between"
          align="stretch"
        >
          <Flex>
            <Flex gap={5} align="center">
              {menuSections && (
                <Drawer.Trigger
                  className={menuIconRecipe({
                    onlySp: menuItems.length <= 5,
                  })}
                >
                  <Icons.Iconography.Menu />
                </Drawer.Trigger>
              )}
              {logo}
            </Flex>

            {menuSections && menuItems.length <= 5 && (
              <TabBar.Root
                className={tabContainerRecipe()}
                defaultValue={menuItems.find((menu) => menu.selected)?.label}
              >
                <TabBar.List bordered={false}>
                  {menuItems.map((item) => {
                    const Component = item.as ?? "a";
                    return (
                      <Component key={item.label} {...item}>
                        <TabBar.Trigger value={item.label}>
                          {item.label}
                        </TabBar.Trigger>
                      </Component>
                    );
                  })}
                </TabBar.List>
              </TabBar.Root>
            )}
          </Flex>

          <Flex align="center" gap={5}>
            {actionButton && actionButton}
            {authButton && (
              <>
                <Divider type="vertical" className={dividerRecipe()} />
                {authButton}
              </>
            )}
          </Flex>
        </Flex>
        {contentNavigation && contentNavigation}
      </Flex>

      <Drawer.Overlay />
      <Drawer.Content sections={menuSections ?? []} />
    </Drawer.Root>
  );
};

export default Header;

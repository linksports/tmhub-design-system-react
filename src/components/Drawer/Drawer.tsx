import * as Dialog from "@radix-ui/react-dialog";
import {
  MenuItemProps,
  DrawerContentProps,
  SectionProps,
} from "./Drawer.types";
import { Box, Divider, Flex, Heading, Icons, Label, Text } from "..";
import {
  closeButtonContainerRecipe,
  closeButtonRecipe,
  contentRecipe,
  menuItemContainerRecipe,
  menuItemIconRecipe,
  menuItemLabelRecipe,
  menuItemTextRecipe,
  overlayRecipe,
  sectionContainerRecipe,
  sectionTitleRecipe,
} from "./Drawer.css";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Trigger = Dialog.Trigger;

const Root = Dialog.Root;
const Portal = Dialog.Portal;

const Overlay = () => <Dialog.Overlay className={overlayRecipe()} />;

const Content: React.FC<DrawerContentProps> = ({ sections, className }) => (
  <Flex direction="column" align="start" asChild>
    <Dialog.Content
      className={[contentRecipe(), className].filter(Boolean).join(" ")}
    >
      <Dialog.Title asChild>
        <VisuallyHidden>Navigation Drawer</VisuallyHidden>
      </Dialog.Title>
      <Flex
        align="start"
        justify="start"
        className={closeButtonContainerRecipe()}
      >
        <Dialog.Close className={closeButtonRecipe()}>
          <Box asChild>
            <Icons.Iconography.Close color="primary" size="md" />
          </Box>
        </Dialog.Close>
      </Flex>
      {sections.map((section, index) => (
        <>
          {index > 0 && <Divider key={`divider-${index}`} />}
          <Section key={`section-${index}`} {...section} />
        </>
      ))}
    </Dialog.Content>
  </Flex>
);

export { Trigger, Root, Portal, Overlay, Content };

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <Flex align="stretch" direction="column" className={sectionContainerRecipe()}>
    {title && (
      <Heading className={sectionTitleRecipe()} level="sm" color="secondary">
        {title}
      </Heading>
    )}
    {items.map((menuItem, index) => (
      <MenuItem key={`menuItem-${index}`} {...menuItem} />
    ))}
  </Flex>
);

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  badge,
  selected,
  as,
  ...props
}) => {
  const Icon = icon && Icons.Iconography[icon];
  const Component = as ?? "a";
  return (
    <Flex
      align="center"
      gap={3}
      className={menuItemContainerRecipe({ selected })}
      asChild
    >
      <Component {...props}>
        {Icon && <Icon color={"primary"} className={menuItemIconRecipe()} />}
        <Text
          color={"primary"}
          fontWeight={selected ? "bold" : "regular"}
          className={menuItemTextRecipe()}
        >
          {label}
        </Text>
        {typeof badge === "string" && (
          <Text color={"secondary"} className={menuItemLabelRecipe()}>
            {badge}
          </Text>
        )}
        {typeof badge === "object" && (
          <Label {...badge} className={menuItemLabelRecipe()}></Label>
        )}
      </Component>
    </Flex>
  );
};

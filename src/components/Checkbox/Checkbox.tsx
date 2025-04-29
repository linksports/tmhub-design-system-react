// Checkbox.tsx
import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckboxProps } from "./Checkbox.types";
import {
  checkBoxRootRecipe,
  checkBoxBoxRecipe,
  checkMarkRecipe,
} from "./Checkbox.css";
import Text from "../Text";
import Flex from "../Flex";
import { Icons } from "..";

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  defaultChecked,
  disabled = false,
  onCheckedChange,
}) => {
  return (
    <Flex gap={3} asChild align="center">
      <RadixCheckbox.Root
        defaultChecked={defaultChecked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        className={checkBoxRootRecipe({ disabled })}
      >
        <div className={checkBoxBoxRecipe({ disabled })}>
          <Flex gap={3} asChild align="center">
            <RadixCheckbox.Indicator className={checkMarkRecipe({ disabled })}>
              <Icons.Iconography.Check size="md" />
            </RadixCheckbox.Indicator>
          </Flex>
        </div>
        <Text fontSize="md" color="unset" asChild>
          <span>{label}</span>
        </Text>
      </RadixCheckbox.Root>
    </Flex>
  );
};

export default Checkbox;

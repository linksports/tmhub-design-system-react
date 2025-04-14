"use client";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { DropdownProps } from "./Dropdown.types";
import Flex from "../Flex";
import {
  dropdownTriggerRecipe,
  dropdownLabelRecipe,
  supportTextRecipe,
  dropdownTriggerIconRecipe,
  dropdownContainerRecipe,
  dropdownOptionContainerRecipe,
  dropdownTriggerStyle,
  dropdownItemRecipe,
  dropdownItemTextRecipe,
} from "./Dropdown.css";
import Text from "../Text";
import { Icons } from "..";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  label,
  placeholder = "Select",
  supportingText,
  errorMessage,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <Flex gap={3} direction="column" className={dropdownContainerRecipe()}>
      <Select.Root disabled={disabled} onValueChange={onChange}>
        <Flex asChild gap={3} justify="between" align="center">
          <Select.Trigger
            {...props}
            defaultValue={defaultValue}
            className={[
              dropdownTriggerRecipe({
                hasError: !!errorMessage,
                disabled,
              }),
              dropdownTriggerStyle,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {label && (
              <Text
                color={disabled ? "tertiaryDisabled" : "secondary"}
                className={dropdownLabelRecipe()}
              >
                {label}
              </Text>
            )}

            <Select.Value placeholder={placeholder} />
            <Icons.Iconography.ArrowDropDown
              className={dropdownTriggerIconRecipe()}
            />
          </Select.Trigger>
        </Flex>
        <Select.Content className={dropdownOptionContainerRecipe()}>
          {options.map((option) => (
            <Select.Item
              key={option.label}
              className={dropdownItemRecipe()}
              value={option.value}
              disabled={option.disabled}
            >
              <Select.ItemText asChild>
                <Text
                  asChild
                  color="primary"
                  className={dropdownItemTextRecipe({
                    disabled: option.disabled || disabled,
                  })}
                  fontSize="md"
                >
                  <span>{option.label}</span>
                </Text>
              </Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>

      {(errorMessage || supportingText) && (
        <Text
          color={errorMessage ? "alert" : "unset"}
          fontSize="xs"
          className={supportTextRecipe({ disabled: disabled })}
        >
          {errorMessage || supportingText}
        </Text>
      )}
    </Flex>
  );
};

export default Dropdown;

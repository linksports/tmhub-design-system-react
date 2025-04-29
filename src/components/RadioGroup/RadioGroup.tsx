import React from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { RadioGroupProps } from "./RadioGroup.types";
import {
  radioItemRecipe,
  radioIndicatorRecipe,
  radioCircleRecipe,
} from "./RadioGroup.css";
import Text from "../Text";
import Flex from "../Flex";

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  defaultValue,
  disabled = false,
  containerClassName,
  onChange,
}) => {
  return (
    <Flex asChild gap={3} direction="column">
      <RadixRadioGroup.Root
        defaultValue={defaultValue}
        onValueChange={onChange}
        disabled={disabled}
        className={containerClassName}
      >
        {options.map((option) => {
          const itemDisabled = option.disabled || disabled;
          return (
            <RadixRadioGroup.Item
              key={option.value}
              value={option.value}
              disabled={itemDisabled}
              className={radioItemRecipe({
                disabled: itemDisabled,
              })}
            >
              <div className={radioIndicatorRecipe({ disabled: itemDisabled })}>
                <RadixRadioGroup.Indicator
                  className={radioCircleRecipe({ disabled: itemDisabled })}
                />
              </div>
              <Text fontSize="md" color={"unset"} asChild>
                <span>{option.label}</span>
              </Text>
            </RadixRadioGroup.Item>
          );
        })}
      </RadixRadioGroup.Root>
    </Flex>
  );
};

export default RadioGroup;

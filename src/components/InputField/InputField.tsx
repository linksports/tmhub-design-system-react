"use client";
import React, { useId } from "react";
import Box from "../Box";
import { InputFieldProps } from "./InputField.types";
import Flex from "../Flex";
import {
  inputFieldRecipe,
  inputFieldInputRecipe,
  inputFieldLabelRecipe,
  inputFieldLabelStyle,
  inputFieldContainerRecipe,
  supportTextRecipe,
  bottomTextContainerRecipe,
  countTextRecipe,
  iconContainerRecipe,
} from "./InputField.css";
import Text from "../Text";

const InputField: React.FC<InputFieldProps> = ({
  id,
  defaultValue = "",
  label,
  supportingText,
  errorMessage,
  leadingIcon,
  trailingIcon,
  maxLength,
  onTrailingIconClick,
  ...props
}) => {
  const inputId = id ?? `input-${useId()}`;
  const [value, setValue] = React.useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e?.target?.value);
    props?.onChange?.(e?.target?.value);
  };

  return (
    <Flex gap={2} direction="column" className={inputFieldContainerRecipe()}>
      <Flex
        asChild
        justify="start"
        align="center"
        gap={3}
        className={inputFieldRecipe({
          hasError: !!errorMessage,
          disabled: props.disabled,
        })}
      >
        <label id={inputId}>
          {label && (
            <span
              className={[
                inputFieldLabelRecipe({
                  hasValue: value.length > 0,
                  hasLeadingIcon: !!leadingIcon,
                  disabled: props.disabled,
                }),
                inputFieldLabelStyle,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {label}
            </span>
          )}

          {leadingIcon && (
            <Box className={iconContainerRecipe()}>{leadingIcon}</Box>
          )}
          <Text asChild color="unset">
            <input
              {...props}
              id={inputId}
              value={value}
              onChange={onChange}
              className={inputFieldInputRecipe({ disabled: props.disabled })}
            />
          </Text>
          {trailingIcon && (
            <button
              disabled={props.disabled}
              onClick={onTrailingIconClick}
              className={iconContainerRecipe()}
            >
              {trailingIcon}
            </button>
          )}
        </label>
      </Flex>
      {(errorMessage || supportingText || maxLength) && (
        <Flex
          gap={3}
          align="center"
          justify="between"
          className={bottomTextContainerRecipe({ disabled: props.disabled })}
        >
          {(errorMessage || supportingText) && (
            <Text
              color={errorMessage ? "alert" : "unset"}
              fontSize="xs"
              className={supportTextRecipe()}
            >
              {errorMessage || supportingText}
            </Text>
          )}
          {!!maxLength && (
            <Text color="unset" fontSize="xs" className={countTextRecipe()}>
              <Text
                color={value.length > maxLength ? "alert" : "unset"}
                fontSize="xs"
              >
                {value.length > maxLength
                  ? maxLength - value.length
                  : value.length}
              </Text>
              /{maxLength}
            </Text>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default InputField;

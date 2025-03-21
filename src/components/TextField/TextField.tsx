"use client";
import React, { useId } from "react";
import { InputFieldProps } from "./TextField.types";
import Flex from "../Flex";
import {
  textFieldRecipe,
  textFieldTextareaRecipe,
  textFieldLabelRecipe,
  textFieldLabelStyle,
  textFieldContainerRecipe,
  supportTextRecipe,
  bottomTextContainerRecipe,
  countTextRecipe,
} from "./TextField.css";
import Text from "../Text";

const InputField: React.FC<InputFieldProps> = ({
  id,
  defaultValue = "",
  label,
  supportingText,
  errorMessage,
  maxLength,
  ...props
}) => {
  const textareaId = id ?? `textarea-${useId()}`;
  const [value, setValue] = React.useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e?.target?.value);
    props?.onChange?.(e?.target?.value);
  };

  return (
    <Flex gap={2} direction="column" className={textFieldContainerRecipe()}>
      <Flex
        asChild
        justify="start"
        align="stretch"
        gap={3}
        className={textFieldRecipe({
          hasError: !!errorMessage,
          disabled: props.disabled,
        })}
      >
        <label id={textareaId}>
          {label && (
            <span
              className={[
                textFieldLabelRecipe({
                  hasValue: value.length > 0,
                  disabled: props.disabled,
                }),
                textFieldLabelStyle,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {label}
            </span>
          )}

          <Text asChild color="unset">
            <textarea
              {...props}
              id={textareaId}
              value={value}
              onChange={onChange}
              className={textFieldTextareaRecipe({ disabled: props.disabled })}
            />
          </Text>
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

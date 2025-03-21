export type InputFieldProps = React.ComponentProps<"input"> & {
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  supportingText?: string;
  errorMessage?: string;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  onTrailingIconClick?: () => void;
  onChange?: (value?: string) => void;
  onBlur?: (value?: string) => void;
  onFocus?: () => void;
};

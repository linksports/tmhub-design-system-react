export type InputFieldProps = React.ComponentProps<"textarea"> & {
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  supportingText?: string;
  errorMessage?: string;
  onChange?: (value?: string) => void;
  onBlur?: (value?: string) => void;
  onFocus?: () => void;
};

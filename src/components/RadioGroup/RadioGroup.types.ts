export type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  options: RadioOption[];
  defaultValue?: string;
  disabled?: boolean;
  containerClassName?: string;
  onChange?: (value: string) => void;
};

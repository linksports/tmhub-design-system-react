export type OptionType = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type DropdownProps = React.ComponentProps<"button"> & {
  options: OptionType[];
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  supportingText?: string;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (value?: string) => void;
};

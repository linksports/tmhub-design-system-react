import { IconProps, iconsSizeMap } from "../Icons.types";
const SvgShorinjiKempo: React.FC<IconProps> = (props) => {
  const { size = "md", color = "#13334C" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconsSizeMap[size]}
      height={iconsSizeMap[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M5.282 22.912a1 1 0 0 1-1-1l.003-5.4a1 1 0 0 1 1-1h4.464a1 1 0 0 1 0 2H6.284l-.002 4.4a1 1 0 0 1-1 1M18.705 22.942a1 1 0 0 1-.68-.266l-5.885-5.442a1 1 0 0 1 1.358-1.468l5.886 5.442a1 1 0 0 1-.68 1.734"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M13.25 4.488c0 1.153-.835 1.998-1.99 1.998-1.153 0-2.01-.845-2.01-1.998s.846-2 2-2 2 .846 2 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M18.595 7.5H9.922L6.83 4.33l.959-1.208a1 1 0 0 0-1.566-1.244L4.717 3.775a1 1 0 0 0 .067 1.32L8.75 9.164l-.002 4.347a1 1 0 0 0 1 1l3.002.001a1 1 0 0 0 1-1V9.5h4.844a1 1 0 1 0 0-2"
      />
    </svg>
  );
};
export default SvgShorinjiKempo;

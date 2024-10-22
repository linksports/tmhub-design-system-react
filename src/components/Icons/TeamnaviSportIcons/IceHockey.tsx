import { IconProps, iconsSizeMap } from "../Icons.types";
const SvgIceHockey: React.FC<IconProps> = (props) => {
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
        d="M22.24 3.09a.494.494 0 0 0-.695.125L11.2 17.97a.4.4 0 0 1-.5.13l-7.57-3.665a.5.5 0 0 0-.43 0 .52.52 0 0 0-.275.335l-.91 2.615c-.06.245.075.5.31.585l8.045 3q.084.03.175.03c.16 0 .315-.075.41-.215l11.91-17a.495.495 0 0 0-.125-.695M20.25 19.5h-2.5a.749.749 0 1 0 0 1.5h2.5a.749.749 0 1 0 0-1.5"
      />
    </svg>
  );
};
export default SvgIceHockey;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgBeachUltimate: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      style={style}
      className={[
        icons({
          size,
          color,
        }),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.515 9.5c0 .55-.45 1-1 1h-2.24a1.03 1.03 0 0 1-.575-.18l-1.285-.9-2.865 4.095a1 1 0 0 1-.82.425 1 1 0 0 1-.575-.18L7.7 12.04a1 1 0 0 1-.245-1.39l2.855-4.08L5.825 4.6a1.003 1.003 0 0 1-.515-1.32c.22-.505.81-.735 1.32-.515l4.67 2.05c.06.025.12.06.17.095l.815.57.92.645 3.385 2.37h1.92A1.01 1.01 0 0 1 19.515 9.5M13.69 5.245c.945.66 2.115.45 2.775-.495s.455-2.125-.49-2.785-2.125-.455-2.785.49c-.665.945-.445 2.13.5 2.79M23 8.5h-1.76a.75.75 0 0 0-.75.75v.25h3.26v-.25c0-.415-.34-.75-.75-.75M6.015 18.895c.245.08.58.185.735.19.025-.01.055-.02.09-.04l.57-1.4a1 1 0 1 0-1.83-.81l-.715 1.77c.42.055.8.175 1.15.29m4.505.365c-.37-.16-.755-.285-1.16-.26-.59.03-1.095.35-1.545.63-.34.215-.665.415-.945.45-.33.035-.755-.1-1.16-.23-.52-.17-1.06-.34-1.59-.245-.935.175-1.64.8-2.26 1.355-.065.055-.125.115-.19.17a.504.504 0 0 0-.045.705.495.495 0 0 0 .705.045 6 6 0 0 0 .195-.175c.545-.49 1.115-.995 1.775-1.115.285-.05.68.075 1.105.21.51.165 1.035.335 1.58.27.505-.06.945-.33 1.365-.595.38-.235.735-.46 1.065-.48.3-.015.675.16 1.07.345.335.16.68.32 1.045.4zm11.81 1.865q-.074-.067-.155-.135c-.57-.51-1.35-1.21-2.295-1.385-.53-.1-1.07.075-1.59.245-.41.13-.83.27-1.16.23-.28-.03-.605-.235-.945-.45-.275-.17-.57-.355-.895-.48l1.135 1.665q.044.061.08.13.24.099.51.13c.545.06 1.07-.11 1.58-.27.42-.135.82-.265 1.105-.21.665.125 1.325.715 1.81 1.145q.084.074.16.14a.495.495 0 0 0 .705-.045.5.5 0 0 0-.045-.71m-10.005-4.55a.9.9 0 0 0-.25-.25l-4.95-3.465a1.007 1.007 0 0 0-1.395.245 1.007 1.007 0 0 0 .245 1.395l4.8 3.365 3.175 4.65a1.005 1.005 0 0 0 1.39.26.997.997 0 0 0 .255-1.39z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBeachUltimate;
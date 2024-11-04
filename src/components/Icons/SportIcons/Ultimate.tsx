import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgUltimate: React.FC<IconProps> = (props) => {
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
        d="M19.515 9.5c0 .55-.45 1-1 1h-2.24a1.03 1.03 0 0 1-.575-.18l-1.285-.9-2.865 4.095a1 1 0 0 1-.82.425 1 1 0 0 1-.575-.18L7.7 12.04a1 1 0 0 1-.245-1.39l2.855-4.08L5.825 4.6a1.003 1.003 0 0 1-.515-1.32c.22-.505.81-.735 1.32-.515l4.67 2.05c.06.025.12.06.17.095l.815.57.92.645 3.385 2.37h1.92A1.01 1.01 0 0 1 19.515 9.5m-7.19 7.075a.9.9 0 0 0-.25-.25l-4.95-3.465a1.007 1.007 0 0 0-1.395.245 1.007 1.007 0 0 0 .245 1.395l4.8 3.365 3.175 4.65a1.005 1.005 0 0 0 1.39.26.997.997 0 0 0 .255-1.39zm-5.42-.25a1 1 0 0 0-1.32.51l-.98 2.42-2.76 1.84a1 1 0 1 0 1.115 1.66l3-2a1 1 0 0 0 .36-.425l1.095-2.69a1 1 0 0 0-.51-1.315m6.785-11.08c.945.66 2.115.45 2.775-.495s.455-2.125-.49-2.785-2.125-.455-2.785.49c-.665.945-.445 2.13.5 2.79M23 8.5h-1.76a.75.75 0 0 0-.75.75v.25h3.26v-.25c0-.415-.34-.75-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUltimate;

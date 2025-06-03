import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgStats: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props;
  return (
    <svg
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
        d="M4.875 23.25h-1.5a1.125 1.125 0 0 1-1.125-1.125v-6.75a1.125 1.125 0 0 1 1.125-1.125h1.5A1.125 1.125 0 0 1 6 15.375v6.75a1.125 1.125 0 0 1-1.125 1.125m10.5 0h-1.5a1.125 1.125 0 0 1-1.125-1.125v-11.25a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v11.25a1.125 1.125 0 0 1-1.125 1.125m5.25 0h-1.5A1.125 1.125 0 0 1 18 22.125v-16.5A1.125 1.125 0 0 1 19.125 4.5h1.5a1.125 1.125 0 0 1 1.125 1.125v16.5a1.125 1.125 0 0 1-1.125 1.125m-10.5 0h-1.5A1.125 1.125 0 0 1 7.5 22.125V1.875A1.125 1.125 0 0 1 8.625.75h1.5a1.125 1.125 0 0 1 1.125 1.125v20.25a1.125 1.125 0 0 1-1.125 1.125"
      />
    </svg>
  );
};
export default SvgStats;

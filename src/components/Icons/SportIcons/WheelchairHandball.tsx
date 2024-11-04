import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgWheelchairHandball: React.FC<IconProps> = (props) => {
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
        d="M11.558 5.275a2.025 2.025 0 1 0-.105-4.05 2.025 2.025 0 0 0 .105 4.05"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.32 8.45-2.855-2a1 1 0 0 0-.575-.18H7.02L5.905 4.6c-.21.055-.42.085-.64.085-.66 0-1.28-.265-1.74-.705a1 1 0 0 0 .125.85l2 3c.185.28.5.445.83.445h2.995v5c0 .55.45 1 1 1h1.535a3.126 3.126 0 0 1 0 6.25 3.126 3.126 0 0 1-2.77-4.575 1 1 0 1 0-1.77-.93 5.132 5.132 0 0 0 4.54 7.51c2.825 0 5.125-2.3 5.125-5.125a5.12 5.12 0 0 0-2.66-4.49v-4.63h2.095l2.6 1.82a1.006 1.006 0 0 0 1.395-.245 1.02 1.02 0 0 0-.245-1.41"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.345 3.683a1.5 1.5 0 1 0-.16-2.996 1.5 1.5 0 0 0 .16 2.996"
      />
    </svg>
  );
};
export default SvgWheelchairHandball;

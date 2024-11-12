import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgBaseball: React.FC<IconProps> = (props) => {
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
        d="M12 5c1.735 0 3.32.635 4.545 1.685A9.9 9.9 0 0 0 15 12c0 1.955.57 3.775 1.545 5.315A6.96 6.96 0 0 1 12 19a6.93 6.93 0 0 1-4.54-1.685 9.94 9.94 0 0 0 0-10.63A6.93 6.93 0 0 1 12 5m5.61 11.17A6.94 6.94 0 0 0 19 12c0-1.565-.52-3.005-1.39-4.17A8.43 8.43 0 0 0 16.5 12c0 1.515.41 2.935 1.11 4.17M5 12c0-1.565.52-3.005 1.39-4.17A8.43 8.43 0 0 1 7.5 12c0 1.515-.41 2.935-1.11 4.17A6.94 6.94 0 0 1 5 12m7 8.5c-4.685 0-8.5-3.815-8.5-8.5S7.315 3.5 12 3.5s8.5 3.815 8.5 8.5-3.815 8.5-8.5 8.5M12 2C6.475 2 2 6.475 2 12c0 5.52 4.475 10 10 10 5.52 0 10-4.48 10-10 0-5.525-4.48-10-10-10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBaseball;

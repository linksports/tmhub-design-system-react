import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFieldHockey: React.FC<IconProps> = (props) => {
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
        d="M8.455 20.955c-.69 0-1.38-.2-1.98-.625-1.58-1.105-1.95-3.315-.825-4.925.32-.455.95-.565 1.405-.24.445.32.53.95.22 1.405-.475.705-.325 1.65.35 2.12.68.475 1.63.285 2.125-.42L20.875 3.205a.51.51 0 0 1 .705-.115c.23.16.29.47.135.705l-10.33 15.63a3.58 3.58 0 0 1-2.93 1.53M1.5 12a2 2 0 1 0 3.999.001A2 2 0 0 0 1.5 12"
      />
    </svg>
  );
};
export default SvgFieldHockey;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgIceHockey: React.FC<IconProps> = (props) => {
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
        d="M22.24 3.09a.494.494 0 0 0-.695.125L11.2 17.97a.4.4 0 0 1-.5.13l-7.57-3.665a.5.5 0 0 0-.43 0 .52.52 0 0 0-.275.335l-.91 2.615c-.06.245.075.5.31.585l8.045 3q.084.03.175.03c.16 0 .315-.075.41-.215l11.91-17a.495.495 0 0 0-.125-.695M20.25 19.5h-2.5a.749.749 0 1 0 0 1.5h2.5a.749.749 0 1 0 0-1.5"
      />
    </svg>
  );
};
export default SvgIceHockey;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFloorHockey: React.FC<IconProps> = (props) => {
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
        d="M22 22.5H2a.5.5 0 0 1-.5-.5c0-.275.225-.5.5-.5h20c.275 0 .5.225.5.5s-.225.5-.5.5m.265-19.91a.494.494 0 0 0-.695.125L11.225 17.47a.4.4 0 0 1-.5.13L3.15 13.935a.5.5 0 0 0-.43 0 .52.52 0 0 0-.275.335l-.91 2.615c-.06.245.075.5.31.585l8.045 3q.084.03.175.03c.16 0 .315-.075.41-.215l11.91-17a.5.5 0 0 0-.12-.695M20.275 19h-2.5a.749.749 0 1 0 0 1.5h2.5a.749.749 0 1 0 0-1.5"
      />
    </svg>
  );
};
export default SvgFloorHockey;

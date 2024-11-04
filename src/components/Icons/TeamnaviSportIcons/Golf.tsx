import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgGolf: React.FC<IconProps> = (props) => {
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
        d="M18.035 7.755a27.3 27.3 0 0 1-9.6 2.71.4.4 0 0 1-.435-.4V3.67a.4.4 0 0 1 .585-.355 27.3 27.3 0 0 0 9.175 2.87c.825.1 1.025 1.195.275 1.57M3.5 19.75c0 1.52 3.805 2.75 8.5 2.75s8.5-1.23 8.5-2.75S16.695 17 12 17c-1.87 0-3.595.195-5 .525V2c0-.275-.225-.5-.5-.5S6 1.725 6 2v16.855c0 .275-.225.5-.5.5H3.9a.403.403 0 0 0-.4.395s0-.005 0 0"
      />
    </svg>
  );
};
export default SvgGolf;

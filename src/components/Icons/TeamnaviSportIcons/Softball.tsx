import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSoftball: React.FC<IconProps> = (props) => {
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
        d="M15 12c0-2.5.92-4.78 2.435-6.53q.578.481 1.065 1.06a8.45 8.45 0 0 0-2 5.47c0 2.08.755 3.99 2 5.47a8.5 8.5 0 0 1-1.065 1.06A9.94 9.94 0 0 1 15 12M6.565 5.47A8.5 8.5 0 0 0 5.5 6.53a8.45 8.45 0 0 1 2 5.47c0 2.08-.755 3.99-2 5.47q.488.579 1.065 1.06A9.94 9.94 0 0 0 9 12c0-2.5-.92-4.78-2.435-6.53M12 22c5.525 0 10-4.475 10-10S17.525 2 12 2 2 6.475 2 12s4.475 10 10 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSoftball;

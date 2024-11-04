import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgOtherWinterSports: React.FC<IconProps> = (props) => {
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
        d="M12 22c5.529 0 10-4.471 10-10S17.529 2 12 2 2 6.471 2 12s4.486 10 10 10M6.329 10.386A1.443 1.443 0 0 1 5.8 8.429 1.443 1.443 0 0 1 7.757 7.9l2.8 1.614V6.286c0-.786.643-1.429 1.429-1.429.785 0 1.428.643 1.428 1.429v3.243l2.8-1.615a1.43 1.43 0 0 1 1.957.529 1.43 1.43 0 0 1-.528 1.957l-2.8 1.614 2.8 1.615c.686.4.914 1.271.528 1.957a1.44 1.44 0 0 1-1.242.714c-.243 0-.486-.057-.715-.186l-2.8-1.643v3.243c0 .786-.643 1.429-1.428 1.429a1.433 1.433 0 0 1-1.429-1.429v-3.243l-2.8 1.629a1.44 1.44 0 0 1-.714.186 1.43 1.43 0 0 1-.714-2.671L9.129 12z"
      />
    </svg>
  );
};
export default SvgOtherWinterSports;

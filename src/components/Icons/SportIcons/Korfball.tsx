import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgKorfball: React.FC<IconProps> = (props) => {
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
        d="m19.61 12.59 2.245 1.83c.095.075.145.19.145.31v5.37c0 .22-.18.4-.4.4H21v2.1c0 .22-.18.4-.4.4h-1.2c-.22 0-.4-.18-.4-.4v-2.1h-.53a.45.45 0 0 1-.43-.315 1.7 1.7 0 0 0-.275-.51 1.77 1.77 0 0 0-1.41-.675L2.4 18.98c-.22 0-.4-.18-.4-.4V12.9c0-.22.18-.4.4-.4h16.955c.09 0 .18.03.255.09M5.88 11.5l.44-1.125a.37.37 0 0 0-.11-.425L4.165 8.275a6.34 6.34 0 0 1 1.24-3.1l1.75-.015c.14 0 .27-.08.335-.21l.985-1.995a6.3 6.3 0 0 1 2.025-.33c.71 0 1.39.115 2.025.33l.985 1.995c.06.125.19.21.335.21l1.75.015a6.4 6.4 0 0 1 1.24 3.1L14.79 9.95a.37.37 0 0 0-.11.425l.44 1.125h2.455A7.503 7.503 0 0 0 10.5 1.505 7.503 7.503 0 0 0 3.425 11.5zm4.375-.16a.42.42 0 0 0 .49 0l2.1-1.525a.42.42 0 0 0 .15-.465l-.8-2.47a.41.41 0 0 0-.395-.285H9.2c-.18 0-.34.115-.395.285l-.8 2.47c-.055.17.005.36.15.465z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgKorfball;

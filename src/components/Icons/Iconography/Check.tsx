import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgCheck: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#check_svg__a)">
        <path
          fill="currentColor"
          d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        />
      </g>
      <defs>
        <clipPath id="check_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgCheck;

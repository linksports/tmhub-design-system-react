import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgArrowDown: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#arrow_down_svg__a)">
        <path
          fill="currentColor"
          d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
        />
      </g>
      <defs>
        <clipPath id="arrow_down_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgArrowDown;

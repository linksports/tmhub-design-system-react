import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgArrowRight: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#arrow_right_svg__a)">
        <path
          fill="currentColor"
          d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"
        />
      </g>
      <defs>
        <clipPath id="arrow_right_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgArrowRight;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgArrowLeft: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#arrow_left_svg__a)">
        <path
          fill="currentColor"
          d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"
        />
      </g>
      <defs>
        <clipPath id="arrow_left_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgArrowLeft;

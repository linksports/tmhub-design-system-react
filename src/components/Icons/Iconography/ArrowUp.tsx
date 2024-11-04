import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgArrowUp: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#arrow_up_svg__a)">
        <path
          fill="currentColor"
          d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
        />
      </g>
      <defs>
        <clipPath id="arrow_up_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgArrowUp;

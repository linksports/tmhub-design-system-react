import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgArrowDropUp: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#arrow_drop_up_svg__a)">
        <path fill="currentColor" d="m7 14 5-5 5 5z" />
      </g>
      <defs>
        <clipPath id="arrow_drop_up_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgArrowDropUp;

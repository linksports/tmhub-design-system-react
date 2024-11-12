import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgPlayArrow: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#play_arrow_svg__a)">
        <path fill="currentColor" d="M8 5v14l11-7z" />
      </g>
      <defs>
        <clipPath id="play_arrow_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgPlayArrow;

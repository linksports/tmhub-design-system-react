import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgShare: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#share_svg__a)">
        <path
          fill="currentColor"
          d="M3.1 20.1C5.6 16.6 9 14.9 14 14.9l.1 4.1 6.9-7.1L13.9 5l.1 4C7 10.1 4 15.1 3.1 20.1"
        />
      </g>
      <defs>
        <clipPath id="share_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgShare;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSkipPrevious: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#skip_previous_svg__a)">
        <path fill="currentColor" d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
      </g>
      <defs>
        <clipPath id="skip_previous_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSkipPrevious;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSkipNext: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#skip_next_svg__a)">
        <path fill="currentColor" d="m6 18 8.5-6L6 6zM16 6v12h2V6z" />
      </g>
      <defs>
        <clipPath id="skip_next_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSkipNext;

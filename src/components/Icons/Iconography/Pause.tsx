import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgPause: React.FC<IconProps> = (props) => {
  const { size = "md", color = "#13334C" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={icons({
        size,
      })}
    >
      <g clipPath="url(#pause_svg__a)">
        <path fill={color} d="M6 19h4V5H6zm8-14v14h4V5z" />
      </g>
      <defs>
        <clipPath id="pause_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgPause;

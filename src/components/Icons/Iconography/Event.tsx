import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgEvent: React.FC<IconProps> = (props) => {
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
      <g fill={color} clipPath="url(#event_svg__a)">
        <path d="M21 9H3v12h18zM21 4.5h-4.5v2.25h-.75V4.5h-7.5v2.25H7.5V4.5H3v3.75h18zM8.25 3H7.5v1.5h.75zM16.5 3h-.75v1.5h.75z" />
      </g>
      <defs>
        <clipPath id="event_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgEvent;

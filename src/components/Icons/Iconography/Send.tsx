import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSend: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#send_svg__a)">
        <path fill={color} d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
      </g>
      <defs>
        <clipPath id="send_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSend;

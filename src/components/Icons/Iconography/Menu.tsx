import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgMenu: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#menu_svg__a)">
        <path fill={color} d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
      </g>
      <defs>
        <clipPath id="menu_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgMenu;

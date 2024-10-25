import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgHome: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#home_svg__a)">
        <path fill={color} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </g>
      <defs>
        <clipPath id="home_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgHome;

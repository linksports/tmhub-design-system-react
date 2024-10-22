import { IconProps, iconsSizeMap } from "../Icons.types";
const SvgArrowLeft: React.FC<IconProps> = (props) => {
  const { size = "md", color = "#13334C" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconsSizeMap[size]}
      height={iconsSizeMap[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#arrow_left_svg__a)">
        <path fill={color} d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
      </g>
      <defs>
        <clipPath id="arrow_left_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgArrowLeft;

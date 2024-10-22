import { IconProps, iconsSizeMap } from "../Icons.types";
const SvgSkipNext: React.FC<IconProps> = (props) => {
  const { size = "md", color = "#13334C" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconsSizeMap[size]}
      height={iconsSizeMap[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#skip_next_svg__a)">
        <path fill={color} d="m6 18 8.5-6L6 6zM16 6v12h2V6z" />
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

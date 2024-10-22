import { IconProps, iconsSizeMap } from "../Icons.types";
const SvgSort: React.FC<IconProps> = (props) => {
  const { size = "md", color = "#13334C" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconsSizeMap[size]}
      height={iconsSizeMap[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="sort_svg__a"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#sort_svg__a)">
        <path
          fill={color}
          d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45zM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6z"
        />
      </g>
    </svg>
  );
};
export default SvgSort;

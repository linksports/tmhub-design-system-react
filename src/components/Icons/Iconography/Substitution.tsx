import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSubstitution: React.FC<IconProps> = (props) => {
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
      <mask
        id="substitution_svg__a"
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
      <g mask="url(#substitution_svg__a)">
        <path
          fill="currentColor"
          d="m7 20-5-5 5-5 1.4 1.425L5.825 14H13v2H5.825L8.4 18.575zm10-6-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425 17 4l5 5z"
        />
      </g>
    </svg>
  );
};
export default SvgSubstitution;

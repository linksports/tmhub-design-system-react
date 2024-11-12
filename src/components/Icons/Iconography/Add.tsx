import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgAdd: React.FC<IconProps> = (props) => {
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
        id="add_svg__a"
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
      <g mask="url(#add_svg__a)">
        <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
      </g>
    </svg>
  );
};
export default SvgAdd;

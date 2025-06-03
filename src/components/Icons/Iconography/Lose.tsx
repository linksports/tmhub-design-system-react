import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgLose: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props;
  return (
    <svg
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
        id="lose_svg__a"
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
      <g mask="url(#lose_svg__a)">
        <path
          fill="currentColor"
          d="m8.796 17.056-1.852-1.852L10.134 12l-3.19-3.18 1.852-1.85L12 10.159l3.18-3.19 1.852 1.852L13.842 12l3.19 3.204-1.853 1.852L12 13.867l-3.204 3.19Z"
        />
      </g>
    </svg>
  );
};
export default SvgLose;

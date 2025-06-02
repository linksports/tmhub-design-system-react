import { icons } from "../../Icons/Icons.css";
import { IconProps } from "../../Icons/Icons.types";
const SvgOpponentSingles: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 128 128"
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
        id="OpponentSingles_svg__a"
        width={128}
        height={128}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <circle cx={64} cy={64} r={64} fill="#D9D9D9" />
      </mask>
      <g fill="currentColor" mask="url(#OpponentSingles_svg__a)">
        <circle cx={64} cy={40} r={24} />
        <circle cx={63.999} cy={115.999} r={47.999} />
      </g>
    </svg>
  );
};
export default SvgOpponentSingles;

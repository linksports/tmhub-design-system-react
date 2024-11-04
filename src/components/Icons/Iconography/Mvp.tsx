import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgMvp: React.FC<IconProps> = (props) => {
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
        id="mvp_svg__a"
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
      <g mask="url(#mvp_svg__a)">
        <path
          fill="currentColor"
          d="m9.675 13.7.875-2.85L8.25 9h2.85l.9-2.8.9 2.8h2.85l-2.325 1.85.875 2.85-2.3-1.775zM6 23v-7.725a7.7 7.7 0 0 1-1.475-2.4A7.9 7.9 0 0 1 4 10q0-3.35 2.325-5.675T12 2t5.675 2.325T20 10a7.9 7.9 0 0 1-.525 2.875q-.525 1.35-1.475 2.4V23l-6-2zm6-7q2.5 0 4.25-1.75T18 10t-1.75-4.25T12 4 7.75 5.75 6 10t1.75 4.25T12 16"
        />
      </g>
    </svg>
  );
};
export default SvgMvp;

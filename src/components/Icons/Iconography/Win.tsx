import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgWin: React.FC<IconProps> = (props) => {
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
        id="win_svg__a"
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
      <g mask="url(#win_svg__a)">
        <path
          fill="currentColor"
          d="M12 19.48q-3.097 0-5.29-2.19Q4.52 15.1 4.52 12q0-3.097 2.19-5.29Q8.9 4.52 12 4.52q3.097 0 5.29 2.19Q19.48 8.9 19.48 12q0 3.097-2.19 5.29-2.19 2.19-5.29 2.19m0-2.65q2.004 0 3.418-1.412 1.413-1.413 1.413-3.418t-1.413-3.417Q14.005 7.169 12 7.17T8.582 8.583 7.17 12t1.413 3.418 3.418 1.413Z"
        />
      </g>
    </svg>
  );
};
export default SvgWin;

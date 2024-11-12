import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgMute: React.FC<IconProps> = (props) => {
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
        id="mute_svg__a"
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
      <g mask="url(#mute_svg__a)">
        <path
          fill="currentColor"
          d="m19.8 22.6-3.025-3.025a8.3 8.3 0 0 1-1.325.688 9.5 9.5 0 0 1-1.45.462v-2.05q.35-.125.688-.25.336-.124.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4 18.4 18.4zm-.2-5.8-1.45-1.45a6.8 6.8 0 0 0 .638-1.625q.212-.85.212-1.75 0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975q0 1.325-.363 2.55A8.8 8.8 0 0 1 19.6 16.8m-3.35-3.35L14 11.2V7.95a4.15 4.15 0 0 1 1.838 1.65q.662 1.1.662 2.4a4.3 4.3 0 0 1-.25 1.45M12 9.2 9.4 6.6 12 4zm-2 5.95V12.8L8.2 11H5v2h2.85z"
        />
      </g>
    </svg>
  );
};
export default SvgMute;

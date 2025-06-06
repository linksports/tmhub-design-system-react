import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSport: React.FC<IconProps> = (props) => {
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
        id="sport_svg__a"
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
      <g mask="url(#sport_svg__a)">
        <path
          fill="currentColor"
          d="M4.05 11H6.9a5.84 5.84 0 0 0-1.65-3.25q-.45.725-.762 1.537A7.7 7.7 0 0 0 4.05 11m13.05 0h2.85a7.7 7.7 0 0 0-.437-1.713 9 9 0 0 0-.763-1.537A5.838 5.838 0 0 0 17.1 11M5.25 16.25A5.837 5.837 0 0 0 6.9 13H4.05q.125.9.438 1.712.312.813.762 1.538m13.5 0q.45-.725.763-1.538A7.7 7.7 0 0 0 19.95 13H17.1a5.84 5.84 0 0 0 1.65 3.25M8.95 11H11V4.05a8.8 8.8 0 0 0-2.462.737A7.5 7.5 0 0 0 6.5 6.2a8.6 8.6 0 0 1 1.613 2.162Q8.751 9.575 8.95 11M13 11h2.05q.2-1.425.838-2.638A8.6 8.6 0 0 1 17.5 6.2a7.5 7.5 0 0 0-2.037-1.413A8.8 8.8 0 0 0 13 4.05zm-2 8.95V13H8.95a8 8 0 0 1-.837 2.637A8.6 8.6 0 0 1 6.5 17.8q.9.875 2.038 1.412A8.8 8.8 0 0 0 11 19.95m2 0a8.8 8.8 0 0 0 2.463-.738A7.5 7.5 0 0 0 17.5 17.8a8.6 8.6 0 0 1-1.612-2.163A8 8 0 0 1 15.05 13H13zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.138A9.7 9.7 0 0 1 12 2q2.075 0 3.9.787a10.1 10.1 0 0 1 3.175 2.138q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"
        />
      </g>
    </svg>
  );
};
export default SvgSport;

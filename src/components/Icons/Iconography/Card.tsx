import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgCard: React.FC<IconProps> = (props) => {
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
        id="card_svg__a"
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
      <g mask="url(#card_svg__a)">
        <path
          fill="currentColor"
          d="M18 22H6q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.412A1.93 1.93 0 0 1 6 2h12q.824 0 1.413.587Q20 3.176 20 4v16q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22"
        />
      </g>
    </svg>
  );
};
export default SvgCard;

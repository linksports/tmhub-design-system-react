import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgReview: React.FC<IconProps> = (props) => {
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
        id="review_svg__a"
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
      <g mask="url(#review_svg__a)">
        <path
          fill="currentColor"
          d="M2 22V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h16q.824 0 1.413.587Q22 3.176 22 4v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18H6zm2-4.825L5.175 16H20V4H4zm5.075-2.925L12 12.475l2.925 1.775-.775-3.325 2.6-2.25-3.425-.275L12 5.25 10.675 8.4l-3.425.275 2.6 2.25z"
        />
      </g>
    </svg>
  );
};
export default SvgReview;

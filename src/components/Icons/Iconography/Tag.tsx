import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTag: React.FC<IconProps> = (props) => {
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
        id="tag_svg__a"
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
      <g mask="url(#tag_svg__a)">
        <path
          fill="currentColor"
          d="m6 20 1-4H3.5l.5-2h3.5l1-4h-4L5 8h4l1-4h2l-1 4h4l1-4h2l-1 4h3.5l-.5 2h-3.5l-1 4h4l-.5 2h-4l-1 4h-2l1-4H9l-1 4zm3.5-6h4l1-4h-4z"
        />
      </g>
    </svg>
  );
};
export default SvgTag;

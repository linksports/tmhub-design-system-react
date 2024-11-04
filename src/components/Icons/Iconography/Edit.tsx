import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgEdit: React.FC<IconProps> = (props) => {
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
        id="edit_svg__a"
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
      <g mask="url(#edit_svg__a)">
        <path
          fill="currentColor"
          d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425.362-.15.762-.15t.775.15.65.45L20.425 5q.3.275.438.65a2.17 2.17 0 0 1 0 1.512 1.9 1.9 0 0 1-.438.663L7.25 21zM17.6 7.8 19 6.4 17.6 5l-1.4 1.4z"
        />
      </g>
    </svg>
  );
};
export default SvgEdit;

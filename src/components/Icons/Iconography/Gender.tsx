import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgGender: React.FC<IconProps> = (props) => {
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
        id="gender_svg__a"
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
      <g fill="currentColor" mask="url(#gender_svg__a)">
        <path d="M7 7.5q-.725 0-1.237-.513A1.69 1.69 0 0 1 5.25 5.75q0-.725.513-1.237A1.69 1.69 0 0 1 7 4q.725 0 1.238.513.512.512.512 1.237t-.512 1.237A1.69 1.69 0 0 1 7 7.5M5 20v-5H4v-4.5q0-.825.588-1.412A1.93 1.93 0 0 1 6 8.5h2q.825 0 1.412.588Q10 9.675 10 10.5V15H9v5zM17 7.5q-.725 0-1.238-.513a1.69 1.69 0 0 1-.512-1.237q0-.725.512-1.237A1.69 1.69 0 0 1 17 4q.725 0 1.238.513.512.512.512 1.237t-.512 1.237A1.69 1.69 0 0 1 17 7.5M15 20v-4h-1l1.375-6.375a1.8 1.8 0 0 1 .637-.812Q16.45 8.5 17 8.5t.988.313a1.8 1.8 0 0 1 .637.812L20 16h-1v4z" />
      </g>
    </svg>
  );
};
export default SvgGender;

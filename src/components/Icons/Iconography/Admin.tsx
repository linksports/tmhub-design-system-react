import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgAdmin: React.FC<IconProps> = (props) => {
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
        id="admin_svg__a"
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
      <g mask="url(#admin_svg__a)">
        <path
          fill="currentColor"
          d="M12 13q1.45 0 2.475-1.025A3.37 3.37 0 0 0 15.5 9.5q0-1.45-1.025-2.475A3.37 3.37 0 0 0 12 6q-1.45 0-2.475 1.025A3.37 3.37 0 0 0 8.5 9.5q0 1.45 1.025 2.475A3.37 3.37 0 0 0 12 13m0 9q-3.65-.925-5.825-4T4 11.1V5l8-3 8 3v6.1q0 3.825-2.175 6.9T12 22m0-2.1a7.2 7.2 0 0 0 2.613-1.487 11.9 11.9 0 0 0 1.987-2.288 10.4 10.4 0 0 0-2.238-.838A9.8 9.8 0 0 0 12 15q-1.2 0-2.363.287-1.161.288-2.237.838.851 1.275 1.987 2.288A7.2 7.2 0 0 0 12 19.9"
        />
      </g>
    </svg>
  );
};
export default SvgAdmin;

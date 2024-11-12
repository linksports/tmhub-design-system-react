import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgOrganization: React.FC<IconProps> = (props) => {
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
        id="organization_svg__a"
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
      <g mask="url(#organization_svg__a)">
        <path
          fill="currentColor"
          d="M2 21V3h10v4h10v14zm2-2h6v-2H4zm0-4h6v-2H4zm0-4h6V9H4zm0-4h6V5H4zm8 12h8V9h-8zm2-6v-2h4v2zm0 4v-2h4v2z"
        />
      </g>
    </svg>
  );
};
export default SvgOrganization;

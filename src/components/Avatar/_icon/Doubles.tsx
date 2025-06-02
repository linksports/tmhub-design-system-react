import { icons } from "../../Icons/Icons.css";
import { IconProps } from "../../Icons/Icons.types";
const SvgDoubles: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 128 128"
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
        id="Doubles_svg__a"
        width={128}
        height={128}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <circle cx={64} cy={64} r={63.5} fill="#F7931E" stroke="#F7931E" />
      </mask>
      <g mask="url(#Doubles_svg__a)">
        <circle cx={88} cy={37.2} r={20} fill="currentColor" />
        <circle cx={88} cy={37.2} r={20} stroke="#F7931E" />
        <circle cx={32} cy={56} r={20} fill="currentColor" />
        <circle cx={32} cy={56} r={20} stroke="#F7931E" />
        <mask
          id="Doubles_svg__b"
          width={79}
          height={82}
          x={50.174}
          y={60.2}
          fill="#000"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M50.174 60.2h79v82h-79z" />
          <path
            fillRule="evenodd"
            d="M88.008 141.2c22.091 0 40-17.909 40-40s-17.909-40-40-40c-15.698 0-29.285 9.043-35.833 22.204C66.21 89.616 76.002 103.664 76.002 120c0 6.393-1.5 12.436-4.167 17.796a39.9 39.9 0 0 0 16.173 3.404"
            clipRule="evenodd"
          />
        </mask>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M88.008 141.2c22.091 0 40-17.909 40-40s-17.909-40-40-40c-15.698 0-29.285 9.043-35.833 22.204C66.21 89.616 76.002 103.664 76.002 120c0 6.393-1.5 12.436-4.167 17.796a39.9 39.9 0 0 0 16.173 3.404"
          clipRule="evenodd"
        />
        <path
          fill="#F7931E"
          d="m52.175 83.404-.896-.445-.466.936.957.424zm19.66 54.392-.895-.446-.466.937.956.423zm55.173-36.596c0 21.539-17.461 39-39 39v2c22.643 0 41-18.356 41-41zm-39-39c21.539 0 39 17.46 39 39h2c0-22.644-18.357-41-41-41zM53.07 83.85C59.456 71.015 72.703 62.2 88.008 62.2v-2c-16.092 0-30.017 9.271-36.729 22.759zm-1.3.469C65.456 90.376 75.002 104.074 75.002 120h2c0-16.746-10.039-31.144-24.423-37.51zM75.002 120a38.8 38.8 0 0 1-4.062 17.35l1.79.891A40.8 40.8 0 0 0 77.003 120zm13.006 20.2a38.85 38.85 0 0 1-15.768-3.319l-.81 1.829a40.9 40.9 0 0 0 16.578 3.49z"
          mask="url(#Doubles_svg__b)"
        />
        <circle
          cx={36}
          cy={120}
          r={41.3}
          fill="currentColor"
          stroke="#F7931E"
          strokeWidth={2.6}
        />
      </g>
    </svg>
  );
};
export default SvgDoubles;

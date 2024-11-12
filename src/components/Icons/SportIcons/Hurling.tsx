import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgHurling: React.FC<IconProps> = (props) => {
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.01 18.13c.1-.55.555-.69 1.03-.805 1.705-.41 3.48-.81 4.855-1.965 1.51-1.275 7.6-10.135 9.045-12.16.18-.255.565-.205.825-.155.405.08.755.285 1.025.595.125.145.305.425.18.62-.12.185-.405.15-.59.13-.475-.055-1.03-.025-1.325.395l-6.885 9.83c-.605.86-.975 1.825-1.225 2.845-.17.685-.285 1.385-.585 2.03-1.29 2.805-6.84 1.315-6.35-1.36M7 12A2 2 0 1 0 3.001 12 2 2 0 0 0 7 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHurling;

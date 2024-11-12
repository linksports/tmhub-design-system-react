import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgBandy: React.FC<IconProps> = (props) => {
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
        d="m22.36 3.785-6.405 9.155-.02.035q-.134.189-.26.37l-3.4 4.86c-.915 1.31-1.95 2.175-3.07 2.565-.44.155-.9.23-1.39.23-1.2 0-2.55-.465-4.095-1.405a.3.3 0 0 1-.04-.03l-1.48-1.1a.496.496 0 0 1-.145-.625l1-2a.53.53 0 0 1 .315-.26.52.52 0 0 1 .405.06c.045.03.07.055.135.115.78.745 2.82 2.47 4.94 2.42 1.01-.025 1.93-.465 2.73-1.305l.015-.015c.01-.01 1.22-1.205 3.27-4.095l6.685-9.55c.16-.225.47-.28.695-.125.215.165.27.475.115.7M19 17a2 2 0 1 0-.001 3.999A2 2 0 0 0 19 17"
      />
    </svg>
  );
};
export default SvgBandy;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgPaletaFronton: React.FC<IconProps> = (props) => {
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
        d="M5 14a2 2 0 1 1-.001-3.999A2 2 0 0 1 5 14m.37 6.34-.39.515c-.305.435.2.87.64 1.18.435.305 1.02.63 1.325.195l.355-.545zm2.195.925 2.01-3.1-1.67-1.17-2.23 2.945zm11.7-18.915c-2.125-1.42-5.02-.93-6.565 1.1-.535.71-.85 1.51-.95 2.33l-.86 4.91a12.9 12.9 0 0 1-2.15 5.195l-.54.71 1.64 1.15.495-.765a13 13 0 0 1 4.12-3.77l4.33-2.5c.68-.35 1.29-.865 1.76-1.535a4.85 4.85 0 0 0-1.28-6.825"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPaletaFronton;

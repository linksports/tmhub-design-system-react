import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgBasketball: React.FC<IconProps> = (props) => {
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
        d="M3.5 12q-.001.383.035.75H7.46a8.48 8.48 0 0 1-1.96 4.72q.488.579 1.065 1.06a9.95 9.95 0 0 0 2.395-5.78h2.29v7.715c.245.02.495.035.75.035q.383.001.75-.035V12.75h2.29a9.96 9.96 0 0 0 2.395 5.78 8.5 8.5 0 0 0 1.065-1.06 8.5 8.5 0 0 1-1.96-4.72h3.925A9 9 0 0 0 20.5 12q.001-.383-.035-.75H16.54c.16-1.79.865-3.42 1.96-4.72a8.5 8.5 0 0 0-1.065-1.06 9.95 9.95 0 0 0-2.395 5.78h-2.29V3.535A9 9 0 0 0 12 3.5q-.383-.001-.75.035v7.715H8.96a9.96 9.96 0 0 0-2.395-5.78A8.5 8.5 0 0 0 5.5 6.53a8.48 8.48 0 0 1 1.96 4.72H3.535A7 7 0 0 0 3.5 12M2 12C2 6.475 6.475 2 12 2c5.52 0 10 4.475 10 10 0 5.52-4.48 10-10 10-5.525 0-10-4.48-10-10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBasketball;

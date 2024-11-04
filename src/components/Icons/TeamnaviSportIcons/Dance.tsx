import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgDance: React.FC<IconProps> = (props) => {
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
        d="M15.09 22.82h-.045a1 1 0 0 1-.955-1.045l.165-3.675-1.88-1.9a.997.997 0 0 1 .01-1.415.997.997 0 0 1 1.415.01l2.185 2.21c.195.2.3.47.29.75l-.185 4.115c-.025.53-.47.95-1 .95m-6.045-.57 2.025-6.455a1.004 1.004 0 0 0-.655-1.255 1.004 1.004 0 0 0-1.255.655L7.135 21.65a1.004 1.004 0 0 0 .955 1.3c.425 0 .82-.275.955-.7M12.735.83C11.79.17 10.61.375 9.95 1.32s-.445 2.13.5 2.79 2.115.45 2.775-.495.455-2.125-.49-2.785m6.125 1.04a1 1 0 0 0-1.41-.125L12.95 5.5h-2.795l-4.58-3.21a1.007 1.007 0 0 0-1.395.245 1.007 1.007 0 0 0 .245 1.395L9.09 7.2v5.3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V7.15l4.64-3.87c.425-.355.48-.985.13-1.41"
      />
    </svg>
  );
};
export default SvgDance;

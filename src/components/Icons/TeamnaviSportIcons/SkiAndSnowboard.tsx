import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSkiAndSnowboard: React.FC<IconProps> = (props) => {
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
        d="M21.49 8.84c.33.995.51 2.055.51 3.16a10.001 10.001 0 0 1-10 10c-4.885 0-8.95-3.505-9.825-8.135A9.997 9.997 0 0 1 12 2c1.105 0 2.165.18 3.16.51-.425.345-.79.77-1.065 1.25a8.5 8.5 0 0 0-10.58 8.76A8.501 8.501 0 1 0 20.24 9.905c.48-.275.905-.64 1.25-1.065m-2.58 4.3-2.37-2.37a.386.386 0 0 0-.545 0l-2.215 1.425a.386.386 0 0 1-.545 0L9.64 7.81a.386.386 0 0 0-.545 0L5 11.89V12c0 1.87.73 3.63 2.05 4.95A6.96 6.96 0 0 0 12 19c1.87 0 3.63-.73 4.95-2.05a6.96 6.96 0 0 0 1.96-3.81M21.5 6c0 1.935-1.565 3.5-3.5 3.5A3.497 3.497 0 0 1 14.5 6c0-1.935 1.565-3.5 3.5-3.5s3.5 1.565 3.5 3.5m-2.505 0 .98-.565c.24-.14.32-.445.185-.685a.505.505 0 0 0-.685-.185l-.98.565V4c0-.275-.225-.5-.5-.5s-.5.225-.5.5v1.135l-.98-.565a.5.5 0 1 0-.5.87l.98.565-.98.565a.505.505 0 0 0-.185.685.503.503 0 0 0 .685.185l.98-.565V8c0 .275.225.5.5.5s.5-.225.5-.5V6.865l.98.565a.505.505 0 0 0 .685-.185.5.5 0 0 0-.185-.685z"
      />
    </svg>
  );
};
export default SvgSkiAndSnowboard;
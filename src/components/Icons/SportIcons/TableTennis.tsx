import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTableTennis: React.FC<IconProps> = (props) => {
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
        d="M19.78 2.84c-4.51-3.145-8.895-.375-11.585 3.47C6.45 8.8 5.78 10.5 7.21 12.945c.585 1 2.31 2.215 1.565 3.425L5.72 20.735a.8.8 0 0 0 .195 1.115l.735.515c.36.255.86.165 1.115-.195l2.945-4.205c.02-.025.04-.05.06-.085.855-1.22 2.63.045 3.81.225 2.8.43 4.155-.7 5.9-3.195 2.695-3.84 4.22-8.635-.7-12.07M11.3 15.815l-3.49 4.99a.4.4 0 0 1-.555.1l-.16-.115a.4.4 0 0 1-.1-.555l3.49-4.99a.4.4 0 0 1 .555-.1l.16.115a.396.396 0 0 1 .1.555M3.5 14A2 2 0 1 1 3.499 10 2 2 0 0 1 3.5 14"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTableTennis;

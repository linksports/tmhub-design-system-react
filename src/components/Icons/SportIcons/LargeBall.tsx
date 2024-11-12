import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgLargeBall: React.FC<IconProps> = (props) => {
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
        d="M11.79 18.32a5.6 5.6 0 0 0-1.84.685.37.37 0 0 0-.185.29c-.02.21-.08.415-.21.6l-1.41 2.01c-.435.62-1.32.765-1.96.315s-.81-1.325-.37-1.95l1.41-2.01c.13-.18.3-.31.49-.4a.39.39 0 0 0 .215-.28c.115-.63.125-1.245.04-1.81-.03-.19.185-.315.34-.21l3.54 2.49c.11.075.07.245-.06.27m8.005-15.505C16.225.31 11.09 1.47 8.335 5.4c-1.54 2.2-2.005 4.795-1.495 7.1.04.175.14.325.29.43l7.5 5.26c.13.09.285.13.445.11 2.35-.3 4.65-1.62 6.2-3.83 2.75-3.93 2.09-9.15-1.48-11.655M5.5 12a2 2 0 1 0-3.999-.001A2 2 0 0 0 5.5 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLargeBall;

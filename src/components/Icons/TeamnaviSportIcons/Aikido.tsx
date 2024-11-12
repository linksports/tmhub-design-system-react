import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgAikido: React.FC<IconProps> = (props) => {
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
        d="M16.74 23.012a1 1 0 0 1-1-1l-.003-5H12.75a1 1 0 1 1 0-2h3.987a1 1 0 0 1 1 1l.003 6a1 1 0 0 1-1 1M4.532 22.967a1 1 0 0 1-.75-1.662L9 15.394a1 1 0 1 1 1.5 1.323L5.282 22.63a1 1 0 0 1-.75.338"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.25 3.013c0 1.153-.835 1.998-1.99 1.998-1.153 0-2.01-.845-2.01-1.998s.846-2 2-2 2 .846 2 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.267 4.101a1 1 0 0 0-1.316-.518l-5.585 2.43H9.75a1 1 0 0 0-1 1L8.75 13.01a1 1 0 0 0 1 1l3.002.001a1 1 0 0 0 1-1v-1.617l1.176.823a1 1 0 1 0 1.147-1.638L13.75 8.953V7.591l4.998-2.174a1 1 0 0 0 .518-1.316"
      />
    </svg>
  );
};
export default SvgAikido;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgPickleball: React.FC<IconProps> = (props) => {
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
        d="M22.36 6.53c-.335-1.335-1.27-2.55-2.78-3.61s-2.97-1.52-4.34-1.38c-1.605.17-3.06 1.165-4.32 2.965-1.275 1.825-1.97 3.9-1.95 5.85.01.845.15 1.63.415 2.32l-.95 5.175a.74.74 0 0 0-.785.3l-2.01 2.865a.75.75 0 0 0 .185 1.045l.41.285c.34.24.805.155 1.045-.185l2.01-2.865c.18-.26.175-.59.015-.84l4.595-2.62c.74.01 1.525-.12 2.325-.405 1.84-.65 3.555-2.01 4.83-3.83 1.255-1.8 1.695-3.505 1.305-5.07M9.58 17.145l.57-3.105a4.716 4.716 0 0 0 2.185 1.54zM5 10.99c.205 0 .405.065.57.18a.98.98 0 0 1 .41.645.98.98 0 0 1-.165.745 1.001 1.001 0 0 1-1.39.245.98.98 0 0 1-.41-.645.98.98 0 0 1 .165-.745c.19-.265.495-.425.82-.425m0-1c-.63 0-1.25.295-1.64.855a1.998 1.998 0 1 0 3.275 2.29A1.998 1.998 0 0 0 5 9.99"
      />
    </svg>
  );
};
export default SvgPickleball;

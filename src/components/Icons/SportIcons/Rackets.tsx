import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgRackets: React.FC<IconProps> = (props) => {
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
        d="M22.49 6.39c-.085-1.36-.685-2.5-1.69-3.2-1-.7-2.275-.875-3.585-.495-1.27.37-2.425 1.23-3.255 2.415s-1.24 2.565-1.16 3.885c.075 1.175.53 2.18 1.3 2.885l-4.48 6.4a.75.75 0 0 0-.815.29l-2.01 2.865a.75.75 0 0 0 .185 1.045l.41.285c.34.24.805.155 1.045-.185l2.01-2.865a.75.75 0 0 0-.005-.865l4.48-6.4a3.95 3.95 0 0 0 1.815.435c.435 0 .885-.065 1.34-.2 1.27-.37 2.425-1.23 3.255-2.415s1.245-2.56 1.16-3.88m-1.98 3.315c-1.425 2.03-3.865 2.785-5.45 1.68-.75-.525-1.195-1.39-1.265-2.445-.07-1.095.28-2.25.98-3.25.98-1.395 2.44-2.19 3.77-2.19.605 0 1.185.165 1.68.51 1.58 1.11 1.71 3.66.285 5.695"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.945 11.5h4.575q-.135-.225-.24-.465c-.27-.6-.43-1.26-.475-1.965-.1-1.545.375-3.15 1.335-4.525.865-1.235 2.045-2.165 3.36-2.66a.4.4 0 0 0-.4-.385H1.9c-.22 0-.4.18-.4.4v9.2c0 .22.18.4.4.4h.13A3.01 3.01 0 0 1 4.99 9a3 3 0 0 1 2.955 2.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.4 13.414a2 2 0 1 0-2.829-2.828 2 2 0 0 0 2.828 2.828"
      />
    </svg>
  );
};
export default SvgRackets;

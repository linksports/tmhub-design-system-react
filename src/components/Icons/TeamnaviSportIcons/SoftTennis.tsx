import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSoftTennis: React.FC<IconProps> = (props) => {
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
        d="M22.435 6.83c-.12-1.87-.94-3.43-2.31-4.39s-3.115-1.2-4.915-.67c-1.76.515-3.36 1.705-4.515 3.355C9.54 6.77 8.97 8.685 9.09 10.515c.05.78.22 1.5.505 2.15l-.955 5.2a.74.74 0 0 0-.785.3l-2.01 2.865a.75.75 0 0 0 .185 1.045l.41.285c.34.24.805.155 1.045-.185l2.01-2.865c.18-.26.175-.59.015-.84l4.615-2.635a6.5 6.5 0 0 0 2.195-.265c1.76-.515 3.36-1.705 4.515-3.355 1.145-1.64 1.715-3.555 1.6-5.385M9.785 17.16l.59-3.205c.295.36.64.68 1.03.95.38.27.795.48 1.23.635zm10.225-5.51c-1.43 2.045-3.57 3.2-5.53 3.2-.9 0-1.765-.245-2.505-.76-1.115-.78-1.785-2.07-1.885-3.635-.1-1.6.405-3.29 1.43-4.75 1.43-2.045 3.57-3.2 5.53-3.2.9 0 1.765.245 2.505.76 1.115.78 1.785 2.07 1.885 3.635.1 1.6-.41 3.285-1.43 4.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.993 12.159a2 2 0 1 0-3.987-.318 2 2 0 0 0 3.987.318"
      />
    </svg>
  );
};
export default SvgSoftTennis;

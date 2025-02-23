import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgQuadHockey: React.FC<IconProps> = (props) => {
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
        d="M21.95 11.86a.836.836 0 0 0-1.17-.2c-.375.27-.44.79-.185 1.17.395.585.27 1.375-.29 1.765-.565.395-1.36.24-1.77-.35l-9.28-12.56a.43.43 0 0 0-.705.49l8.615 13.03c.58.83 1.51 1.28 2.445 1.28.575 0 1.15-.17 1.65-.52 1.32-.92 1.625-2.765.69-4.105M15.71 17.28c0-.94-.8-1.595-1.645-1.82-1.09-.29-2.2-.495-3.27-.86-1.06-.365-2.125-.865-2.645-1.915-.415-.84-.65-3.285-.725-4.45v-.01c.005-.175-.07-.34-.24-.385a.863.863 0 0 0-1.11.825v.085c0 .19-.155.345-.345.345H3.22c-.885 0-1.625.67-1.715 1.55l-.005 6.95c-.005.62.265 1.02.655 1.23a2.124 2.124 0 1 0 3.405.67l.85-.46a.37.37 0 0 1 .18-.04h3.84q.066-.001.125.02l.89.455a2.13 2.13 0 0 0 1.925 3.025 2.13 2.13 0 0 0 2.125-2.125c0-.605-.255-1.15-.66-1.54.615-.29.875-.94.875-1.55M3.62 21.49c-.62 0-1.125-.505-1.125-1.125S3 19.24 3.62 19.24s1.125.505 1.125 1.125S4.24 21.49 3.62 21.49m8.12-2.475.005-.015h.005q-.001.008-.01.015m1.63 2.485c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125S13.99 21.5 13.37 21.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgQuadHockey;

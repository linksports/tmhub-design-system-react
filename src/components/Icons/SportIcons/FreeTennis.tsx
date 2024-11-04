import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFreeTennis: React.FC<IconProps> = (props) => {
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
        d="M5 14.5a2 2 0 1 1-.001-3.999 2 2 0 0 1 .001 4M20.265 2.38c-2.825-1.975-7.23-.555-9.845 3.18-2.265 3.235-2.44 7.145-.605 9.415.11.14.12.335.015.48L5.815 21.19a.396.396 0 0 0 .1.555l.985.69c.18.125.43.085.555-.1l4-5.715a.394.394 0 0 1 .465-.145c2.77 1.01 6.44-.49 8.73-3.76 2.61-3.73 2.44-8.355-.385-10.335"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFreeTennis;

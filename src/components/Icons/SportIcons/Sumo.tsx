import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSumo: React.FC<IconProps> = (props) => {
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
        d="M6.265 14.75c.288.192.6.346.926.46l7.402-10.573a4.156 4.156 0 0 0-8.02 2.145 1.12 1.12 0 0 1-.45 1.138 4.16 4.16 0 0 0 .142 6.83m2.429-8.454a1.11 1.11 0 1 0 1.152-1.888 1.664 1.664 0 1 1-1.261 1.8q.05.047.107.089zM18.215 6.282c-.554-.37-1.19-.601-1.853-.672l1.084-1.55a.5.5 0 1 0-.82-.573L4.041 21.463a.5.5 0 0 0 .819.574l3.843-5.487a4.16 4.16 0 0 0 6.858-1.876 1.12 1.12 0 0 1 .915-.812 4.158 4.158 0 0 0 1.739-7.58m-1.65 5.155a1.687 1.687 0 1 1 0-3.374 1.687 1.687 0 0 1 0 3.374"
      />
    </svg>
  );
};
export default SvgSumo;

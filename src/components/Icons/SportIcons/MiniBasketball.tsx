import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgMiniBasketball: React.FC<IconProps> = (props) => {
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
        d="M15.04 11.25h-2.29V9.895c.66.385 1.43.6 2.25.6h.125q-.054.374-.085.755M18 10.5h-1.355q-.069.367-.1.75h3.925c.02.245.035.495.035.75q.001.383-.035.75h-3.925c.16 1.79.865 3.42 1.96 4.72a8.5 8.5 0 0 1-1.065 1.06 9.95 9.95 0 0 1-2.395-5.78H12.75v7.715c-.245.02-.495.035-.75.035a7 7 0 0 1-.75-.035V12.75H8.96a9.96 9.96 0 0 1-2.395 5.78A8.5 8.5 0 0 1 5.5 17.47a8.48 8.48 0 0 0 1.96-4.72H3.535A9 9 0 0 1 3.5 12q-.001-.383.035-.75H7.46A8.48 8.48 0 0 0 5.5 6.53a8.5 8.5 0 0 1 1.065-1.06 9.95 9.95 0 0 1 2.395 5.78h2.29V8.485a4.495 4.495 0 0 1 1.615-6.445A9.997 9.997 0 0 0 2 12c0 5.52 4.475 10 10 10 5.52 0 10-4.48 10-10 0-1.105-.18-2.165-.51-3.16A4.5 4.5 0 0 1 18 10.5M21.5 6c0 1.93-1.57 3.5-3.5 3.5h-3c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5h3c1.93 0 3.5 1.57 3.5 3.5m-5.745-1.625h-.685v2.14c0 .35-.285.565-.67.565-.38 0-.665-.215-.665-.565v-2.14h-.69V6.54c0 .74.565 1.155 1.355 1.155s1.355-.415 1.355-1.155zm1.975 0h-.65l-.81.515v.61l.75-.47h.02v2.62h.69zm2.205 0h-.65l-.81.515v.61l.75-.47h.02v2.62h.69z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMiniBasketball;
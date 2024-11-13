import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgRadball: React.FC<IconProps> = (props) => {
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
        d="M10.05 3.915c.82.57 1.83.39 2.4-.43.575-.815.395-1.835-.425-2.405s-1.84-.39-2.41.425-.38 1.84.435 2.41"
      />
      <path
        fill="currentColor"
        d="M22.995 12.72a2.5 2.5 0 0 1-1.01.45A2.9 2.9 0 0 1 19.1 15.8c-1.6 0-2.9-1.3-2.9-2.9 0-.89.4-1.685 1.03-2.215l1.685 2.46a.501.501 0 0 0 .825-.57l-1.645-2.4c.31-.115.65-.18 1-.18h.005c.11-.36.295-.69.545-.96a3.891 3.891 0 0 0-2.13.295l-1.8-2.63a.997.997 0 0 0 .11-1.91l.805-1.145a.494.494 0 0 0-.125-.695.494.494 0 0 0-.695.125L14.555 4.87l-3.99.64-1.31-.915a1 1 0 0 0-1.39.245l-3.57 5.08c-.88 1.26-.495 3.055.86 4.005a1.006 1.006 0 0 0 1.395-.245l4.35-6.205 3.725-.595 2.04 2.975A3.9 3.9 0 0 0 15.2 12.9c0 2.15 1.75 3.9 3.9 3.9s3.9-1.75 3.9-3.9q.001-.09-.005-.18M4.915 15.145c-2.15 0-3.9 1.75-3.9 3.9s1.75 3.9 3.9 3.9 3.9-1.75 3.9-3.9-1.75-3.9-3.9-3.9m0 6.8c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9-1.3 2.9-2.9 2.9"
      />
      <path
        fill="currentColor"
        d="m15.72 17.665-1.215-.75-.005-4.475c0-.445-.295-.835-.72-.96l-3-.88a1 1 0 0 0-.56 1.92l2.28.67v2.49l-3.475-2.145a.998.998 0 1 0-1.05 1.7l6.695 4.13a.995.995 0 0 0 1.375-.325 1 1 0 0 0-.325-1.375M21.5 12.215a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      />
    </svg>
  );
};
export default SvgRadball;
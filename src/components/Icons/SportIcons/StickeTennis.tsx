import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgStickeTennis: React.FC<IconProps> = (props) => {
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
        d="M22.485 8.925c-.105-1.665-.835-3.05-2.06-3.905-1.22-.855-2.775-1.07-4.375-.6-1.56.455-2.98 1.515-4.005 2.975-1.02 1.46-1.53 3.155-1.425 4.78q.051.773.275 1.455l-.14 4.235a.75.75 0 0 0-.76.305l-2.01 2.865a.75.75 0 0 0 .185 1.045l.41.285c.34.24.805.155 1.045-.185l2.01-2.865a.75.75 0 0 0 .03-.815l3.93-1.58a5.9 5.9 0 0 0 1.46-.24c1.56-.455 2.98-1.515 4.005-2.975 1.025-1.465 1.53-3.16 1.425-4.78m-10.71 8.45.07-2.055q.367.429.84.76.474.329 1 .53zm8.47-4.245c-1.225 1.75-3.05 2.755-4.73 2.79h-.025c-.805.01-1.575-.2-2.23-.66s-1.115-1.11-1.38-1.87c-.005-.01-.005-.02-.01-.025-.545-1.59-.225-3.645 1.005-5.395 1.245-1.78 3.11-2.79 4.815-2.79.78 0 1.53.21 2.17.66.965.675 1.545 1.795 1.635 3.15.085 1.395-.36 2.865-1.25 4.14M14.425 4c.345-.175.7-.33 1.065-.45L13.285 1.6a.4.4 0 0 0-.265-.1H1.7c-.18 0-.27.215-.14.34L4 4zM9.62 11.5c.055-1.615.615-3.25 1.615-4.68A9.3 9.3 0 0 1 12.91 5H4v4.17a3.009 3.009 0 0 1 3.96 2.33z"
      />
      <path fill="currentColor" d="M5 10c-.365 0-.705.1-1 .27A2 2 0 1 0 5 10" />
    </svg>
  );
};
export default SvgStickeTennis;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgRealTennis: React.FC<IconProps> = (props) => {
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
        d="M22 21.5H2c-.275 0-.5.225-.5.5s.225.5.5.5h20c.275 0 .5-.225.5-.5s-.225-.5-.5-.5M12.05 5.395c-1.02 1.46-1.53 3.155-1.425 4.78q.051.773.275 1.455l-.14 4.235a.75.75 0 0 0-.76.305l-2.01 2.865a.75.75 0 0 0 .185 1.045l.41.285c.34.24.805.155 1.045-.185l2.01-2.865a.75.75 0 0 0 .03-.815l3.93-1.58a5.9 5.9 0 0 0 1.46-.24c1.56-.455 2.98-1.515 4.005-2.975 1.02-1.46 1.53-3.155 1.425-4.78-.105-1.665-.835-3.05-2.06-3.905-1.22-.855-2.775-1.07-4.375-.6-1.56.455-2.98 1.515-4.005 2.975m-.275 9.98.07-2.055q.368.429.84.76.474.329 1 .53zm5.91-12.195c.78 0 1.53.21 2.17.66.965.675 1.545 1.795 1.635 3.15.09 1.395-.355 2.865-1.245 4.14-1.225 1.75-3.05 2.755-4.73 2.79h-.025c-.805.01-1.575-.2-2.23-.66s-1.115-1.11-1.38-1.87c-.005-.01-.005-.02-.01-.025-.545-1.59-.225-3.645 1.005-5.395 1.245-1.785 3.105-2.79 4.81-2.79"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.96 11.5h1.865c-.1-.405-.17-.83-.195-1.265-.115-1.78.41-3.63 1.48-5.235H4v4.165A3.004 3.004 0 0 1 7.96 11.5M4 4h7.88a8.8 8.8 0 0 1 2.125-1.765l-.72-.635a.4.4 0 0 0-.265-.1H1.7c-.18 0-.27.215-.14.34z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.79 12.889A2 2 0 1 0 3.212 11.1 2 2 0 0 0 6.79 12.89"
      />
    </svg>
  );
};
export default SvgRealTennis;
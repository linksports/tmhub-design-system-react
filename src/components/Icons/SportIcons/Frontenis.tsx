import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFrontenis: React.FC<IconProps> = (props) => {
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
        d="M22.485 8.925c-.105-1.665-.835-3.05-2.06-3.905-1.22-.855-2.775-1.07-4.375-.6-1.56.455-2.98 1.515-4.005 2.975-1.02 1.46-1.53 3.155-1.425 4.78q.051.773.275 1.455l-.14 4.235a.75.75 0 0 0-.76.305l-2.01 2.865a.75.75 0 0 0 .185 1.045l.41.285c.34.24.805.155 1.045-.185l2.01-2.865a.75.75 0 0 0 .03-.815l3.93-1.58a5.9 5.9 0 0 0 1.46-.24c1.56-.455 2.98-1.515 4.005-2.975 1.025-1.465 1.53-3.16 1.425-4.78m-10.64 6.395q.367.429.84.76.474.329 1 .53l-1.91.77zm8.4-2.19c-1.225 1.75-3.05 2.755-4.73 2.79h-.025c-.805.01-1.575-.2-2.23-.66s-1.115-1.11-1.38-1.87c-.005-.01-.005-.02-.01-.025-.545-1.59-.225-3.645 1.005-5.395 1.245-1.78 3.11-2.79 4.815-2.79.78 0 1.53.21 2.17.66.965.675 1.545 1.795 1.635 3.15.085 1.395-.36 2.865-1.25 4.14M16.5 1.9v1.385c-.24.045-.485.1-.725.175-1.775.52-3.39 1.715-4.54 3.36-1 1.43-1.56 3.065-1.615 4.68H7.96A3.01 3.01 0 0 0 5 9a3.01 3.01 0 0 0-2.96 2.5H1.9c-.22 0-.4-.18-.4-.4V1.9c0-.22.18-.4.4-.4h14.2c.22 0 .4.18.4.4M6.145 10.36a2 2 0 0 0-2.785.49 2 2 0 0 0 .49 2.785c.905.635 2.15.415 2.785-.49a2 2 0 0 0-.49-2.785m-1.56 1.355c-.26.37-.61.64-1.005.795-.06-.16-.09-.335-.09-.505a1.759 1.759 0 0 0 .99-1.41c.16-.06.335-.09.505-.09-.01.415-.14.84-.4 1.21m1.23.86c-.18.255-.28.545-.31.84-.16.06-.335.09-.505.09a2.25 2.25 0 0 1 1.405-2.01c.06.16.09.335.09.505-.265.125-.5.315-.68.575"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFrontenis;

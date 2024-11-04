import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgGymnastics: React.FC<IconProps> = (props) => {
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
        d="M12 3.5c2.27 0 4.405.885 6.01 2.49A8.45 8.45 0 0 1 20.5 12c0 2.27-.885 4.405-2.49 6.01A8.45 8.45 0 0 1 12 20.5a8.45 8.45 0 0 1-6.01-2.49A8.45 8.45 0 0 1 3.5 12c0-2.27.885-4.405 2.49-6.01A8.45 8.45 0 0 1 12 3.5M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2m-1.64 4.825c.66-.945 1.84-1.155 2.785-.49.945.66 1.155 1.84.49 2.785-.66.945-1.83 1.16-2.775.495-.945-.66-1.16-1.845-.5-2.79m8.565 2.835a1 1 0 0 0-1.305-.545l-5.47 2.24a.4.4 0 0 1-.305 0l-5.47-2.24a1.001 1.001 0 0 0-.76 1.85l3.875 1.59v6.52c.795.28 1.635.425 2.5.425a7.5 7.5 0 0 0 2.5-.425v-6.52l3.875-1.59c.525-.21.77-.79.56-1.305"
      />
    </svg>
  );
};
export default SvgGymnastics;

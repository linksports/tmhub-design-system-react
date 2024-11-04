import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgJaiAlai: React.FC<IconProps> = (props) => {
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
        d="m21.205 5.085.845.67c.18.14.205.405.05.58-.88.995-3.53 4.085-3.62 5.275-.09 1.14 1.11 1.735.965 2.96-.14 1.165-1.07 2.15-1.945 2.82-2.05 1.565-5.015 2.685-7.6 2.635-2.88-.055-5.755-1.36-7.955-3.17-.355-.29-.02-.855.405-.68.395.16 1.72.705 2.13.83 2.685.815 4.725.39 7.185-1.065 2.155-1.28 3.7-3.335 5.15-5.33 1.305-1.79 2.545-3.625 3.815-5.44a.4.4 0 0 1 .575-.085M7 12A2 2 0 1 0 3 12 2 2 0 0 0 7 12"
      />
    </svg>
  );
};
export default SvgJaiAlai;

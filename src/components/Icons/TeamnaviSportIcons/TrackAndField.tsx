import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTrackAndField: React.FC<IconProps> = (props) => {
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
        d="m21.135 6.8-2.295 3.275a1 1 0 0 1-.82.425c-.2 0-.4-.06-.575-.18l-1.64-1.145-2.87 4.095a1 1 0 0 1-.82.425 1 1 0 0 1-.575-.18l-2.46-1.72a1 1 0 0 1-.245-1.39l2.87-4.095-.82-.575-1.72 2.455c-.315.45-.94.56-1.395.245-.45-.315-.56-.94-.245-1.395L9.82 3.765a1 1 0 0 1 1.39-.245l3.07 2.15 1.845 1.29 1.64 1.145 1.72-2.455a1.006 1.006 0 0 1 1.65 1.15m-7.7 9.255-4.915-3.44a1.007 1.007 0 0 0-1.395.245 1.007 1.007 0 0 0 .245 1.395l4.095 2.87L8.6 21.22a1.006 1.006 0 0 0 .245 1.395c.175.12.375.18.57.18.315 0 .625-.15.82-.425l3.44-4.915c.32-.46.21-1.085-.24-1.4m-5 .165a1.007 1.007 0 0 0-1.395.245L3.6 21.38a1.007 1.007 0 0 0 .245 1.395 1.006 1.006 0 0 0 1.395-.245l3.44-4.915a.997.997 0 0 0-.245-1.395M15.085 5c.945.66 2.115.45 2.775-.495s.455-2.125-.49-2.785-2.125-.455-2.785.49-.445 2.13.5 2.79"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTrackAndField;

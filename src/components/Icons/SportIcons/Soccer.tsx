import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSoccer: React.FC<IconProps> = (props) => {
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
        d="M15.327 12.458a.55.55 0 0 1-.2.618l-2.8 2.034a.55.55 0 0 1-.65 0l-2.8-2.033a.55.55 0 0 1-.2-.62l1.069-3.292a.55.55 0 0 1 .527-.382h3.462a.55.55 0 0 1 .526.382zM22 12c0 5.522-4.478 10-10 10S2 17.522 2 12 6.477 2 12 2s10 4.477 10 10m-4.281 1.258 2.726-2.232a8.46 8.46 0 0 0-1.654-4.132l-2.335-.018a.5.5 0 0 1-.444-.279L14.7 3.939a8.5 8.5 0 0 0-5.4 0L7.989 6.598a.5.5 0 0 1-.444.279l-2.336.018a8.46 8.46 0 0 0-1.653 4.132l2.725 2.232a.5.5 0 0 1 .15.57l-1.266 3.219a8.54 8.54 0 0 0 4.023 2.974l2.559-1.506a.5.5 0 0 1 .508 0l2.558 1.507a8.54 8.54 0 0 0 4.024-2.975l-1.267-3.219a.5.5 0 0 1 .149-.57"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSoccer;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgGift: React.FC<IconProps> = (props) => {
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
        d="M5.657 23h13.03c.904 0 1.638-.734 1.638-1.638v-8.193H4.018v8.193c0 .904.734 1.638 1.639 1.638M3 10.13v2.2h18.344v-2.2c0-.904-.734-1.638-1.639-1.638H14.91c2.278 0 5.553-2.21 4.835-4.555C19.146 1.98 17.348.99 15.51 1c-2.595.015-3.268 5.455-3.268 5.455h-.07S11.5 1.015 8.905 1C7.066.99 5.268 1.98 4.668 3.937 3.95 6.282 7.226 8.492 9.505 8.492H4.638C3.734 8.492 3 9.226 3 10.131m14.417-7.153s-.08 2.677-3.678 4.677c0 0 .68-3.437 3.678-4.677m-10.39 0c2.996 1.24 3.676 4.677 3.676 4.677-3.597-2-3.677-4.677-3.677-4.677"
      />
    </svg>
  );
};
export default SvgGift;

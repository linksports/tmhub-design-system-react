import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTennis: React.FC<IconProps> = (props) => {
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
        d="M6.145 10.355a2 2 0 0 0-2.785.49 2 2 0 0 0 .49 2.785c.905.635 2.15.415 2.785-.49a1.997 1.997 0 0 0-.49-2.785m-1.555 1.35c-.26.37-.61.64-1.005.795-.06-.16-.09-.335-.09-.505a1.759 1.759 0 0 0 .99-1.41c.16-.06.335-.09.505-.09-.01.415-.14.84-.4 1.21m1.23.86c-.18.255-.28.545-.31.84-.16.06-.335.09-.505.09a2.25 2.25 0 0 1 1.405-2.01c.06.16.09.335.09.505-.265.125-.5.315-.68.575M22.485 6.83c-.12-1.87-.94-3.43-2.31-4.39s-3.115-1.2-4.915-.67c-1.76.515-3.36 1.705-4.515 3.355C9.59 6.77 9.02 8.685 9.14 10.515c.05.78.22 1.5.505 2.15l-.95 5.19a.74.74 0 0 0-.745.31L5.94 21.03a.75.75 0 0 0 .185 1.045l.41.285c.34.24.805.155 1.045-.185l2.01-2.865a.75.75 0 0 0 0-.86l4.585-2.615a6.5 6.5 0 0 0 2.195-.265c1.76-.515 3.36-1.705 4.515-3.355 1.145-1.64 1.715-3.555 1.6-5.385M9.835 17.16l.59-3.205c.295.36.64.68 1.03.95.38.27.795.48 1.23.635zm10.225-5.515c-1.025 1.46-2.435 2.515-3.975 2.97-1.5.44-2.94.25-4.06-.53-2.34-1.64-2.545-5.4-.46-8.385C12.59 4.24 14 3.185 15.54 2.73a5.6 5.6 0 0 1 1.56-.235c.92 0 1.78.26 2.5.765 1.115.78 1.785 2.07 1.885 3.635.105 1.6-.405 3.29-1.425 4.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTennis;

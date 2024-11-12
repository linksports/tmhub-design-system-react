import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFutsal: React.FC<IconProps> = (props) => {
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
        d="M11.995 2c-5.525 0-10 4.475-10 10 0 5.52 4.475 10 10 10 5.52 0 10-4.48 10-10 0-5.525-4.475-10-10-10m-5.57 11.83L5.16 17.05a8.5 8.5 0 0 1-1.605-6.02l2.725 2.23a.5.5 0 0 1 .145.57M7.54 6.875l-2.335.02a8.55 8.55 0 0 1 4.09-2.955l-1.31 2.655a.5.5 0 0 1-.445.28M12 20.5c-.99 0-1.935-.17-2.815-.48l2.56-1.505a.49.49 0 0 1 .51 0l2.56 1.51A8.6 8.6 0 0 1 12 20.5m3.12-7.205-2.8 2.035a.555.555 0 0 1-.65 0l-2.8-2.035a.55.55 0 0 1-.2-.62l1.07-3.29a.55.55 0 0 1 .525-.38h3.46c.24 0 .45.155.525.38l1.07 3.29a.545.545 0 0 1-.2.62m.89-6.7-1.315-2.66a8.5 8.5 0 0 1 4.1 2.955l-2.34-.02a.48.48 0 0 1-.445-.275m2.825 10.455-1.27-3.225c-.08-.2-.02-.43.15-.57l2.73-2.235q.054.48.055.975c0 1.895-.62 3.645-1.665 5.055"
      />
    </svg>
  );
};
export default SvgFutsal;

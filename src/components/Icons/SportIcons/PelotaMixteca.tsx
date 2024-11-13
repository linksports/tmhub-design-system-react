import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgPelotaMixteca: React.FC<IconProps> = (props) => {
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
        d="M10.5 19.515 5.42 15.96a.396.396 0 0 0-.555.1l-.805 1.145c-.38.545-.25 1.29.295 1.67l3.77 2.64c.545.38 1.29.25 1.67-.295l.805-1.145a.407.407 0 0 0-.1-.56M18.58 7.485l-5.435-3.81-.025-.015c-1.22-.85-2.77-.915-3.815-.18l-1.175.825c-.69.485-1.605.645-2.535.45-1.06-.225-2.07.125-2.6.9-1.9 2.765-.805 6.83 2.45 9.11l.21.145.005.005.99-1.055a.4.4 0 0 0 .09-.155.3.3 0 0 0 .005-.155L5.77 8.02a.36.36 0 0 1 .295-.42l3.315-.585a.36.36 0 0 1 .42.295l.195 1.115c.05.28.39.4.6.205l.825-.745a1.2 1.2 0 0 1 1.49-.09l4.455 3.12a1.2 1.2 0 0 1 .34 1.6l-2.395 4.01a.37.37 0 0 1-.215.165l-3.14.875a.34.34 0 0 0-.225.22l-.345 1.12c1.585.91 3.695 1.335 5.345 1 1.4-.285 2.635-1.025 3.455-2.195l.795-1.14c1.925-2.745.85-6.81-2.4-9.085"
      />
      <path
        fill="currentColor"
        d="M7.425 14.995a.3.3 0 0 1-.045-.45q.241-.256.325-.58c.05-.19.06-.395.025-.59l-.795-4.51A.4.4 0 0 1 7.26 8.4l1.275-.225c.22-.04.425.105.465.325l.015.095a1.363 1.363 0 0 0 2.255.78l.825-.745a.21.21 0 0 1 .25-.015l4.455 3.12c.085.06.11.175.055.265l-2.185 3.65a.39.39 0 0 1-.235.18l-2.745.76c-.275.075-.51.235-.68.45a.4.4 0 0 1-.545.08z"
      />
    </svg>
  );
};
export default SvgPelotaMixteca;
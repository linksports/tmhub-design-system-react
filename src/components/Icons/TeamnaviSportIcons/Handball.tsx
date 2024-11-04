import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgHandball: React.FC<IconProps> = (props) => {
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
        d="M11.353 22.956a1 1 0 0 1-.9-1.433l1.689-3.513.37-2.661a1 1 0 1 1 1.98.275L14.1 18.44a1 1 0 0 1-.09.296l-1.755 3.653a1 1 0 0 1-.902.567m9.487-13.95-4.095-2.869A1 1 0 0 0 16.459 6l-2.762-.83-.286-.093a1 1 0 0 0-.137-.033l-2.542-.763L10 3.03a2.24 2.24 0 0 1-1.68 1.093l.886 1.508a1 1 0 0 0 .575.45l2.046.615-1.55 4.718a1 1 0 0 0 .639 1.262l2.85.934q.152.05.312.05a1 1 0 0 0 .95-.688l1.49-4.55 3.172 2.22a1 1 0 0 0 1.147-1.637zm-3.46-7.075a2 2 0 1 0-3.76 1.367 2 2 0 0 0 3.76-1.367M5.286 18.928l2.677-3.822 2.45.386a1 1 0 0 0 .31-1.976l-3.068-.483a1 1 0 0 0-.975.414l-3.03 4.334a1 1 0 1 0 1.638 1.147zm4.185-17.55a1.5 1.5 0 1 0 .09.576 1.5 1.5 0 0 0-.09-.579z"
      />
    </svg>
  );
};
export default SvgHandball;

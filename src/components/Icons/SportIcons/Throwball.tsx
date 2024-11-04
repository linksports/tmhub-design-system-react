import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgThrowball: React.FC<IconProps> = (props) => {
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
        d="M11.465 18.23a1 1 0 0 0-1.925.535l.395 1.42-1.78 1.7a1 1 0 0 0-.03 1.415 1 1 0 0 0 1.415.035l2.21-2.115a1 1 0 0 0 .27-.99zM10.08 5.16c.945.66 2.115.45 2.775-.495s.455-2.125-.49-2.785-2.125-.455-2.785.49-.445 2.13.5 2.79"
      />
      <path
        fill="currentColor"
        d="M19.495 6.495 13.5 6.5h-3.02q-.03-.001-.06.005c-.015 0-.03.005-.045.005s-.03.005-.045.005c-.02.005-.04.005-.06.01q-.008-.001-.015.005l-3.28.825-1.555-2.61a2.5 2.5 0 0 1-1.78.745q-.051.001-.11-.005L5.635 9.02a1 1 0 0 0 1.105.46l2.76-.695V12.5c0 .265.105.52.295.705.19.19.44.295.705.295h3c.265 0 .52-.105.705-.295.19-.19.295-.44.295-.705v-4l5-.005c.55 0 1-.45 1-1-.005-.555-.45-1-1.005-1M15.37 15.005a1 1 0 0 0-.87-.505h-4c-.55 0-1 .45-1 1s.45 1 1 1h3.415l3.235 5.7a.995.995 0 0 0 1.36.375 1 1 0 0 0 .375-1.365zM3.645 4.49a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      />
    </svg>
  );
};
export default SvgThrowball;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTimeline: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props;
  return (
    <svg
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
        d="M21.5 14.5c-1-1-2.2-1.5-3.5-1.5s-2.6.5-3.5 1.5c-1 1-1.5 2.2-1.5 3.5s.5 2.6 1.5 3.5c1 1 2.2 1.5 3.5 1.5s2.6-.5 3.5-1.5c1-1 1.5-2.2 1.5-3.5s-.5-2.6-1.5-3.5m-1.8 5.9-2.2-2.2V15h1v2.8l1.9 1.9z"
      />
      <path
        fill="currentColor"
        d="M11 18v-.6H8v-1.8h3.4c.2-.7.6-1.3 1-1.8H8V12h6.4c1.1-.6 2.3-1 3.6-1 .7 0 1.4.1 2 .3V8.4L14 3H6c-.5 0-1 .2-1.4.5-.4.4-.6.8-.6 1.3v14.4c0 .5.2.9.6 1.3.4.3.9.5 1.4.5h5.7c-.5-.9-.7-1.9-.7-3m2-13.2 5 4.5h-5z"
      />
    </svg>
  );
};
export default SvgTimeline;

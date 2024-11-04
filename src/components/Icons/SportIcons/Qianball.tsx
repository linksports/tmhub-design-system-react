import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgQianball: React.FC<IconProps> = (props) => {
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
        d="M20.515 10.05c-1.2 1.71-2.735 3.225-4.215 4.155q-.96.6-1.845.855l-5.22 3.715a.77.77 0 0 1-.125.535L7.1 22.185a.753.753 0 0 1-1.045.185l-.41-.285a.753.753 0 0 1-.185-1.045l2.01-2.865c.16-.23.43-.34.69-.315l1.665-5.94q-.09-.951.15-2.12c.35-1.69 1.25-3.69 2.405-5.34 1.22-1.745 2.26-2.63 3.375-2.88 1.08-.24 2.225.115 3.715 1.16 1.51 1.055 2.27 2.015 2.47 3.1.225 1.165-.23 2.505-1.425 4.21m-11.22 7.46 3.265-2.325a3.3 3.3 0 0 1-1.265-.54 3.3 3.3 0 0 1-.925-.98zm11.67-11.495c-.15-.81-.785-1.565-2.06-2.46-1.025-.72-1.8-1.05-2.48-1.05q-.226-.001-.445.05c-.84.19-1.725.975-2.775 2.48-1.335 1.91-2.56 4.715-2.385 6.755a.5.5 0 0 1 .02.175c.1.78.42 1.43 1.035 1.86 1.235.865 2.8.225 3.895-.465 1.35-.85 2.82-2.3 3.93-3.885 1.025-1.47 1.43-2.57 1.265-3.46M6.736 12.163a2 2 0 1 0-3.987-.318 2 2 0 0 0 3.987.318"
      />
      <path
        fill="currentColor"
        d="M6.745 13.495h-.68c.415-.365.68-.9.68-1.495 0-1.1-.895-1.995-1.995-1.995S2.755 10.9 2.755 12s.895 1.995 1.995 1.995h1.995c.275 0 .5.225.5.5s-.225.5-.5.5h-2.54a.75.75 0 0 0-.705-.5h-1a.749.749 0 1 0 0 1.5h1c.325 0 .6-.21.705-.5h2.54c.55 0 1-.45 1-1s-.45-1-1-1"
      />
    </svg>
  );
};
export default SvgQianball;

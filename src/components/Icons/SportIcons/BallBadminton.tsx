import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgBallBadminton: React.FC<IconProps> = (props) => {
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
        d="M6 14A2 2 0 1 1 5.999 10 2 2 0 0 1 6 14m14.23-4.72c-.83 1.185-1.985 2.045-3.255 2.415-.455.135-.905.2-1.34.2a3.9 3.9 0 0 1-1.815-.435l-4.91 7.015a.75.75 0 0 1-.02.825l-2.01 2.865a.753.753 0 0 1-1.045.185l-.41-.285a.753.753 0 0 1-.185-1.045l2.01-2.865a.754.754 0 0 1 .86-.28L13 10.89c-.765-.705-1.225-1.71-1.3-2.885-.085-1.32.325-2.7 1.16-3.885.83-1.185 1.985-2.045 3.255-2.415 1.31-.385 2.58-.21 3.585.495 1 .7 1.6 1.84 1.69 3.2.08 1.31-.33 2.69-1.16 3.88m.16-3.825c-.065-1.05-.515-1.92-1.265-2.445a2.9 2.9 0 0 0-1.675-.51c-.34 0-.695.05-1.055.155-1.05.31-2.02 1.03-2.72 2.03s-1.05 2.155-.98 3.25c.065 1.05.515 1.92 1.265 2.445s1.72.65 2.73.35c1.05-.31 2.02-1.03 2.72-2.03s1.05-2.15.98-3.245"
      />
    </svg>
  );
};
export default SvgBallBadminton;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgMiniten: React.FC<IconProps> = (props) => {
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
        d="M5.675 4.36a2 2 0 0 0-2.785.49 2 2 0 0 0 .49 2.785c.905.635 2.15.415 2.785-.49a2 2 0 0 0-.49-2.785M4.12 5.715c-.26.37-.61.64-1.005.795-.06-.16-.09-.335-.09-.505a1.759 1.759 0 0 0 .99-1.41q.247-.096.51-.095c-.015.42-.145.845-.405 1.215m1.225.86c-.18.255-.28.545-.31.84-.16.06-.335.09-.505.09a2.25 2.25 0 0 1 1.405-2.01c.06.16.09.335.09.505-.26.125-.5.315-.68.575M19.47 22.07 18.5 8c0-3.58-2.91-6.485-6.5-6.485-2.115 0-4 1.01-5.185 2.575.43.52.69 1.185.69 1.91A3 3 0 0 1 5.44 8.85l-.91 13.22c-.015.23.165.43.4.43h14.145c.23 0 .41-.195.395-.43M6.5 19.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M7 13c-.535 0-.97-.42-1-.95 0-.015-.005-.035-.005-.05 0-.55.45-1 1-1s1 .45 1 1c.005.55-.44 1-.995 1m9-1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m1.5 7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMiniten;
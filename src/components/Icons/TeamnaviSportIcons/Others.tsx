import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgOthers: React.FC<IconProps> = (props) => {
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
        d="M9.2 22.674a1 1 0 0 1-.98-1.207l1.3-6.15a1 1 0 0 1 1.957.414l-1.3 6.15a1 1 0 0 1-.977.793"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.502 4.727c-.662.945-1.83 1.158-2.776.496s-1.163-1.845-.5-2.79c.661-.945 1.84-1.153 2.785-.49.945.661 1.153 1.84.49 2.785"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.34 22.62a1 1 0 0 1-.956-.71l-1.842-6.096a1 1 0 0 1 1.914-.579l1.842 6.096a1 1 0 0 1-.957 1.29M19.5 6.125h-5.89a1 1 0 0 0-.149-.011l-1.106.01H4.5a1 1 0 1 0 0 2h4.98l.047 5.028a1 1 0 0 0 1 .99h.01l3.002-.029a1 1 0 0 0 .99-1.01l-.049-4.978h5.02a1 1 0 1 0 0-2"
      />
    </svg>
  );
};
export default SvgOthers;

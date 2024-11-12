import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgOtherDance: React.FC<IconProps> = (props) => {
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
        d="M15.547 18.427a1 1 0 0 0 .169-1.263l-1.694-2.713a1 1 0 1 0-1.696 1.059l1.255 2.012-.873.81-1.84-3.221a1 1 0 0 0-1.736.991l3.617 6.335a1 1 0 1 0 1.737-.992l-.776-1.359a1 1 0 0 0 .204-.145zM18.079 8.996a1 1 0 0 0-1.353.411l-.53.994-3.226-6.049-1.408-2.733a1 1 0 1 0-1.778.915l1.411 2.74.007.013.556 1.044a1 1 0 0 0-.276.117L6.475 9.54a1 1 0 0 0-.362 1.312l1.236 2.381a1 1 0 0 0 1.417.387l5.16-3.223 1.386 2.598a1 1 0 0 0 1.765 0l1.413-2.646a1 1 0 0 0-.411-1.353"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.862 7.668c-.91.71-2.089.57-2.799-.339s-.572-2.104.338-2.814 2.097-.564 2.807.346.564 2.097-.346 2.807"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgOtherDance;

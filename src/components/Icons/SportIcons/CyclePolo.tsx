import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgCyclePolo: React.FC<IconProps> = (props) => {
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
        d="M19.475 11.335 18.9 13.38a1 1 0 0 1-1.23.695c-.53-.15-.84-.7-.695-1.235l.425-1.525-1.415-1.61-4.59 2.915a1.005 1.005 0 0 1-1.36-.28l-1.13-1.65a1 1 0 0 1-.155-.765c.055-.265.215-.5.445-.645L12 7.5H8.515c-.035 0-.065 0-.1-.005L9.81 5.5h4.69c.29 0 .56.125.75.34l4.015 4.565c.22.255.3.605.21.93M9.11 3.89a.494.494 0 0 0-.695.125L3.83 10.57l-.9-.63a.4.4 0 0 0-.555.1l-.4.575a.4.4 0 0 0 .1.555L4.695 13a.4.4 0 0 0 .555-.1l.4-.575a.4.4 0 0 0-.1-.555l-.9-.63 4.58-6.555a.5.5 0 0 0-.12-.695m10.15-.165c-.82-.57-1.84-.39-2.41.425-.575.815-.385 1.84.435 2.41s1.83.39 2.4-.43.39-1.83-.425-2.405M8.8 19.045c0 2.15-1.75 3.9-3.9 3.9s-3.9-1.75-3.9-3.9 1.75-3.9 3.9-3.9 3.9 1.75 3.9 3.9m-1 0c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9 1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9m15.2 0c0 2.15-1.75 3.9-3.9 3.9s-3.9-1.75-3.9-3.9 1.75-3.9 3.9-3.9 3.9 1.75 3.9 3.9m-1 0c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9 1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9m-6.89-4.23-1.485-1.575c-.38-.4-1.01-.42-1.415-.045-.4.38-.42 1.01-.045 1.415l.92.98-1.435 2-2.265-4.53a1 1 0 1 0-1.79.89l3 6v.005l1 2a1.004 1.004 0 0 0 1.34.45 1 1 0 0 0 .45-1.34l-.725-1.455 2.525-3.525a.985.985 0 0 0-.075-1.27"
      />
    </svg>
  );
};
export default SvgCyclePolo;
import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgBiribol: React.FC<IconProps> = (props) => {
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
        d="M17.63 5.515A1.497 1.497 0 0 1 19.245 3.9a1.51 1.51 0 0 1 1.375 1.375 1.497 1.497 0 0 1-1.615 1.615 1.52 1.52 0 0 1-1.375-1.375m-7.075 4.25c.95.675 2.13.47 2.795-.485a1.99 1.99 0 0 0-.48-2.78c-.945-.67-2.13-.465-2.795.485-.635.91-.42 2.135.48 2.78m-4.64.405 3.575 2.505v5.34c0 .265.105.52.295.705.025.025.055.05.08.075.49-.165.86-.41 1.3-.705.765-.515 1.7-1.14 3.325-1.35v-3.82l2.41-.235a1 1 0 0 0 .43-.145L20 10.88c.46-.285.63-.89.36-1.36a.996.996 0 0 0-1.395-.35l-2.49 1.55-3.03.3H10.61L7.5 8.835v-2.93c0-.54-.42-1.005-.965-1.025a1 1 0 0 0-1.035 1v3.57c0 .02 0 .045.005.065.045.26.19.5.41.655m16.05 9.16c-1.515.075-2.28-.335-3.095-.77-.86-.46-1.83-.975-3.625-.885q-.405.023-.75.075c-1.315.2-2.08.71-2.77 1.17l-.14.095c-.72.48-1.445.91-2.875.985-1.52.075-2.29-.335-3.11-.77-.855-.455-1.825-.975-3.605-.89a.517.517 0 0 0-.495.495.5.5 0 0 0 .525.505c1.52-.075 2.29.335 3.11.77.86.46 1.83.975 3.625.885s2.71-.705 3.52-1.245c.41-.275.805-.54 1.31-.74.13-.05.27-.1.42-.14.36-.1.78-.175 1.285-.2 1.52-.075 2.29.335 3.11.77.86.46 1.83.975 3.625.885a.5.5 0 0 0 .47-.56.51.51 0 0 0-.535-.435"
      />
    </svg>
  );
};
export default SvgBiribol;
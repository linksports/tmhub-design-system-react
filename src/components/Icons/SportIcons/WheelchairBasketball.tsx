import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgWheelchairBasketball: React.FC<IconProps> = (props) => {
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
        d="M10.466 4.666a2.025 2.025 0 1 0-2.863-2.864 2.025 2.025 0 0 0 2.863 2.864"
      />
      <path
        fill="currentColor"
        d="M12.745 3.27c-.01-.025-.015-.05-.025-.075-.14.17-.22.39-.22.625V5.4l-5.165.86q-.007-.001-.015.005l-.07.015c-.01 0-.02.005-.03.005-.025.005-.045.015-.065.02-.01.005-.02.005-.03.01q-.03.016-.06.025l-.03.015q-.031.015-.055.03l-.03.015c-.02.01-.035.025-.055.035a.1.1 0 0 0-.025.02 1 1 0 0 0-.05.045c-.005.005-.015.01-.02.02q-.029.024-.05.055l-.015.015c-.015.02-.035.04-.05.06-.005.005-.005.01-.01.01l-.045.07c0 .005-.005.005-.005.01-.015.025-.025.05-.04.075 0 .005-.005.005-.005.01l-.03.075c0 .005-.005.01-.005.015a.4.4 0 0 0-.02.075c0 .005-.005.015-.005.02l-.015.07c0 .01-.005.02-.005.03-.005.02-.005.045-.005.065v6.06c0 .55.45 1 1 1H9.03a3.126 3.126 0 0 1 0 6.25 3.126 3.126 0 0 1-2.77-4.575 1 1 0 1 0-1.77-.93 5.132 5.132 0 0 0 4.54 7.51c2.825 0 5.125-2.3 5.125-5.125 0-1.93-1.075-3.62-2.66-4.49V7.6l2.165-.36a1 1 0 0 0 .835-.985v-1.41c-.79-.2-1.46-.78-1.75-1.575M15.653 3.807a1.5 1.5 0 1 0-1.117-2.784 1.5 1.5 0 0 0 1.117 2.784"
      />
    </svg>
  );
};
export default SvgWheelchairBasketball;

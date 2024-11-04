import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgPowerchairFootball: React.FC<IconProps> = (props) => {
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
        d="m14.95 7.87 1.61 1.17c.11.08.265.08.375 0l1.61-1.17c.11-.08.16-.225.115-.355l-.61-1.895a.32.32 0 0 0-.305-.22h-1.99c-.14 0-.26.09-.305.22l-.615 1.895c-.04.13.005.275.115.355"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.75 22.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.8 20.015h2.7v-1.02h-3.505c.35.265.63.615.805 1.02M8.99 18.995q.009.128.01.255c0 .26-.025.52-.07.765h6.27a2.5 2.5 0 0 1 .805-1.02zM3.985 15.07q.375-.069.765-.07c1.04 0 1.995.375 2.735 1H14.6c.22 0 .4-.18.4-.4v-1.2c0-.22-.18-.4-.4-.4H6.175l-.515-2.505H9a.5.5 0 0 0 .415-.22l1-1.495a.5.5 0 1 0-.835-.555L8.73 10.5H5.455l-1.58-7.685c-.04-.185-.165-.315-.31-.315H1.82c-.21 0-.365.27-.31.54zM22.1 17H8.355c.195.31.35.65.46 1.01H22.5v-.61c0-.22-.18-.4-.4-.4M8.62 21.005c-.165.36-.38.695-.635.995h7.225a2.45 2.45 0 0 1-.21-.995zM19.79 22h2.31c.22 0 .4-.18.4-.4v-.595H20c0 .355-.075.69-.21.995"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.5 22.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 13a5.75 5.75 0 1 0-.002-11.502A5.75 5.75 0 0 0 16.75 13m-3.905-8.685 1.345-.01a.29.29 0 0 0 .255-.16l.755-1.53a4.84 4.84 0 0 1 3.1 0l.755 1.53c.05.1.145.16.255.16l1.345.01c.51.675.85 1.49.95 2.375L20.04 7.975a.29.29 0 0 0-.085.33l.73 1.85a4.87 4.87 0 0 1-2.315 1.71L16.9 11a.28.28 0 0 0-.29 0l-1.47.865a4.95 4.95 0 0 1-2.315-1.71l.73-1.85a.295.295 0 0 0-.085-.33L11.905 6.69c.09-.885.43-1.7.94-2.375"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPowerchairFootball;

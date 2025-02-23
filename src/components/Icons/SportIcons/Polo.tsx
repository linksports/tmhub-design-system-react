import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgPolo: React.FC<IconProps> = (props) => {
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
        d="M5.92 12.295c-1.115.19-2.83.47-3.865.685q-.151.03-.28.06a.4.4 0 0 0-.31.43c.195 2.065 1.15 6.075 5.555 6.77.455.055.915.09 1.37.105 1.08.03 2.145-.05 3.105-.195.87-.13 1.92-.26 1.935-1.37.005-.39.015-.82.025-1.215zM23.115 8.655l-6.04-4.23a1.93 1.93 0 0 0-1.115-.35c-.05 0-.1-.02-.13-.06L14.77 2.6a.26.26 0 0 0-.445.18v.96c0 .195-.14.36-.335.385l-4.295.615c-.205.03-.23.31-.035.375l1.505.675c.17.075.145.32-.035.365l-.775.19c-.195.04-.215.31-.025.375l.405.35c.075.065.09.175.03.255-.345.49-1.51 2.16-2.49 3.56l5.655 3.955c.345-1.4.75-3.11.98-4.105a5.1 5.1 0 0 1-1.69-1.94.39.39 0 0 1 .175-.52.39.39 0 0 1 .52.175 4.25 4.25 0 0 0 1.22 1.475c.92.61 2.97.29 3.845.12.28-.055.565-.03.835.065.895.33 1.995.695 2.765.095.3-.235 1.01-1.22.535-1.55"
      />
      <path
        fill="currentColor"
        d="M2.265 8.21a.5.5 0 0 0 .12.695L17.6 19.545l-.635.9c-.13.18-.085.43.095.555l.57.405c.18.13.43.085.56-.095l1.85-2.61a.395.395 0 0 0-.095-.555l-.57-.405a.4.4 0 0 0-.56.095l-.635.9L2.96 8.09a.497.497 0 0 0-.695.12"
      />
    </svg>
  );
};
export default SvgPolo;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTouchRugby: React.FC<IconProps> = (props) => {
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
        d="M5.4 14.5h1.705c1.085-.95 1.99-1 3.305-1h.545l2.375-1.845a1.79 1.79 0 0 1 2.375.14c.635.635.7 1.64.155 2.35l-.595.86c.065 0 .135.005.2.005.51.015 1.035.03 1.49.03.715 0 .93-.035.98-.05.005 0 .015-.005.025-.005a11.4 11.4 0 0 0 3.53-4.09.45.45 0 0 0 0-.405c-1.84-3.575-5.4-6-9.49-6s-7.65 2.425-9.495 6a.45.45 0 0 0 0 .405A11.5 11.5 0 0 0 5.4 14.5m1.94-6.875Q8.16 7.354 9 7.18V6.5c0-.275.225-.5.5-.5s.5.225.5.5v.51q.75-.104 1.5-.125V6c0-.275.225-.5.5-.5s.5.225.5.5v.885c.5.015 1 .06 1.5.125V6.5c0-.275.225-.5.5-.5s.5.225.5.5v.68q.841.174 1.66.445c.26.085.405.37.315.63a.496.496 0 0 1-.63.315 14 14 0 0 0-1.34-.37v1.3c0 .275-.225.5-.5.5a.5.5 0 0 1-.5-.5V8.02c-.495-.07-1-.12-1.5-.135V9.5c0 .275-.225.5-.5.5a.5.5 0 0 1-.5-.5V7.885c-.5.02-1.005.065-1.5.135V9.5c0 .275-.225.5-.5.5a.5.5 0 0 1-.5-.5V8.205q-.681.151-1.34.37a.505.505 0 0 1-.635-.315.495.495 0 0 1 .31-.635"
      />
      <path
        fill="currentColor"
        d="M7.5 15.5H3.41c-.22 0-.4.18-.4.4v3.2c0 .22.18.4.4.4l9.02-.005c.045 0 .095-.01.135-.025l5.405-1.465c.02-.005.04-.015.06-.02.295-.135 2.565-1.205 3.65-1.715a.763.763 0 0 0-.54-1.42c-.975.29-2.2.935-2.98 1.115s-3.58-.035-4.505.035c-.125.01-.2-.125-.135-.23l1.53-2.215a.789.789 0 0 0-1.105-1.11l-2.535 1.97a.4.4 0 0 1-.25.09h-.74c-1.355-.005-1.96.035-2.92.995"
      />
    </svg>
  );
};
export default SvgTouchRugby;

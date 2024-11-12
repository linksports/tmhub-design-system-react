import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTouchFootball: React.FC<IconProps> = (props) => {
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
        d="M3.06 11.86c.04.06.075.12.115.175q.009.006.01.02a4 4 0 0 1 .135.2l.09.125c.01.015.025.03.035.05q.045.059.09.125.014.022.035.045l.105.135c.01.01.015.02.025.03q.127.165.27.33c.005.005.005.01.01.01.04.05.085.095.125.145q.016.015.025.03c.035.04.075.085.115.125l.03.03c.04.04.08.085.115.125l.025.025a12.306 12.306 0 0 0 .985.92h1.7c1.085-.95 1.99-1 3.305-1h.545l2.375-1.845a1.79 1.79 0 0 1 2.375.14c.635.635.7 1.64.155 2.35l-.595.86c.065 0 .135.005.2.005.51.015 1.035.03 1.49.03.715 0 .93-.035.98-.05.005 0 .015-.005.02-.005q.157-.111.315-.23h.005c.33-.25.64-.52.94-.805.075-.075.15-.145.225-.22.05-.05.095-.095.14-.145l.025-.025a3 3 0 0 0 .145-.16c.04-.04.075-.085.115-.125q.016-.015.025-.03c.04-.05.085-.095.125-.145.005-.005.005-.01.01-.01.09-.11.18-.215.27-.33.01-.01.015-.02.025-.03l.105-.135c.01-.015.025-.03.035-.045l.09-.12.035-.05.09-.125.03-.045.105-.15q.008-.006.015-.02l.115-.175c.005-.01.015-.02.02-.035l.09-.14c.01-.02.025-.04.035-.06q.039-.06.07-.12c.015-.02.025-.045.04-.065.02-.04.045-.075.065-.115.015-.02.025-.045.035-.065.025-.04.045-.085.07-.125l.03-.06q.051-.089.095-.185a.3.3 0 0 0 .035-.1q.009-.038.01-.075a.4.4 0 0 0-.025-.18q-.009-.015-.01-.03c-.005-.005-.005-.015-.01-.02q-.211-.406-.445-.79-.016-.022-.025-.045c-.06-.1-.125-.195-.19-.295 0 0 0-.005-.005-.005a11.6 11.6 0 0 0-1.4-1.72 11 11 0 0 0-2.25-1.745l-.215-.125c-.105-.06-.215-.115-.32-.17a5 5 0 0 0-.33-.16q-.164-.075-.335-.15c-.11-.045-.225-.095-.34-.135q-.173-.066-.345-.125a7 7 0 0 0-.35-.11 10.116 10.116 0 0 0-2.95-.435 10.2 10.2 0 0 0-4.96 1.285l-.315.18c-.105.06-.205.125-.31.19a11 11 0 0 0-1.97 1.625q-.129.135-.25.27-.369.411-.7.86c-.035.05-.075.1-.11.15-.325.455-.62.935-.875 1.435a.4.4 0 0 0-.05.205c0 .015 0 .035.005.05a.4.4 0 0 0 .045.15l.095.185q.015.031.03.055c.025.04.045.085.07.125l.035.065c.02.04.045.08.065.115.015.02.025.045.04.065q.039.06.07.12c.01.02.025.04.035.06q.045.074.09.14c.025.025.03.035.035.045M18.5 8.135c.36.34.69.705 1 1.1v2.92c-.31.39-.64.76-1 1.1zM7.34 7.62q.819-.271 1.66-.445V6.5c0-.275.225-.5.5-.5s.5.225.5.5v.505c.5-.065 1-.11 1.5-.125V6c0-.275.225-.5.5-.5s.5.225.5.5v.88c.5.015 1 .06 1.5.125V6.5c0-.275.225-.5.5-.5s.5.225.5.5v.675q.841.174 1.66.445c.26.085.405.37.315.63a.496.496 0 0 1-.63.315 14 14 0 0 0-1.34-.37V9.5c0 .275-.225.5-.5.5a.5.5 0 0 1-.5-.5V8.015c-.495-.07-1-.12-1.5-.135V9.5c0 .275-.225.5-.5.5a.5.5 0 0 1-.5-.5V7.88c-.5.02-1.005.065-1.5.135V9.5c0 .275-.225.5-.5.5a.5.5 0 0 1-.5-.5V8.195c-.455.1-.9.225-1.345.37a.505.505 0 0 1-.635-.315.496.496 0 0 1 .315-.63M4.5 9.235c.31-.39.64-.76 1-1.1v5.12a10 10 0 0 1-1-1.1z"
      />
      <path
        fill="currentColor"
        d="M22.09 15.39a.755.755 0 0 0-.95-.535c-.975.29-2.2.935-2.98 1.115s-3.58-.035-4.505.035c-.125.01-.2-.125-.135-.23l1.53-2.215a.789.789 0 0 0-1.105-1.11l-2.535 1.97a.4.4 0 0 1-.25.09h-.74c-1.36 0-1.965.04-2.925 1H3.41c-.22 0-.4.18-.4.4v3.2c0 .22.18.4.4.4l9.02-.005c.045 0 .095-.01.135-.025l5.405-1.465c.02-.005.04-.015.06-.02.295-.135 2.565-1.205 3.65-1.715a.77.77 0 0 0 .41-.89"
      />
    </svg>
  );
};
export default SvgTouchFootball;

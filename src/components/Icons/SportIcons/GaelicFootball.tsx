import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgGaelicFootball: React.FC<IconProps> = (props) => {
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
        d="M10.55 9.6q.104.121.2.25c-1.62 1.445-2.84 2.02-3.45 1.63a1.3 1.3 0 0 1-.22-.185 8 8 0 0 1 1-2.435c.205-.33.43-.63.67-.92l.005.005.005.005.01.005q.006.007.02.015c.625.425 1.18.94 1.665 1.52zM4.54 6.97c.71.22 1.19.96 1.465 1.54.135.285.235.605.32.92A9 9 0 0 1 7.6 7.29c-.15-.07-.3-.125-.45-.18l-.08-.03-.095-.035a2 2 0 0 0-.19-.07 6 6 0 0 0-.58-.16c-.09-.02-.175-.045-.265-.065a9 9 0 0 0-.515-.09c.25-.415.54-.8.86-1.16l.115.03c.035.01.065.015.1.025.04.01.075.02.115.025.07.015.145.03.215.055.025.01.055.015.08.025q.037.009.075.025c.02.01.045.015.065.025q.232.076.465.16.036.016.08.025l.09.03c.005.005.015.005.02.01s.015.005.02.01l.095.045c.025.01.05.025.075.035a8 8 0 0 1 .585.265l.035.015q.309.156.61.335c.005.005.01.005.015.01l.025.015A9.5 9.5 0 0 1 11.25 8.44c.005.005.01.015.02.02q.008.006.015.02c.02.025.045.05.065.08a21.947 21.947 0 0 1 .34.415c.885-.885 1.75-1.86 2.465-2.695a8.05 8.05 0 0 0-5.79-2.43 7.7 7.7 0 0 1 2.765-.87 9.4 9.4 0 0 1 3.865 2.29q.135-.166.255-.31c.265-.325.475-.58.615-.73.44-.495.89-.845 1.32-1.045a9 9 0 0 0-4.91-1.61A9.06 9.06 0 0 0 3.73 6.96c.27-.075.545-.075.81.01m16.855 4.05c-.115-.155-.24-.235-.39-.26-.49-.07-1.225.475-1.71.835-.145.11-.285.21-.405.295-.43.285-.865.585-1.285.875-.51.35-1.035.715-1.565 1.06-.17.11-.41.075-.525-.09a.38.38 0 0 1 .1-.53c.905-.59 1.715-1.395 2.5-2.17l.09-.09c.95-.935 2.025-2 2.4-3.205.13-.415.015-.93-.4-1.065-.7-.23-1.255.34-1.965 1.175-.14.165-.27.32-.405.46a31.4 31.4 0 0 1-3.525 3.155.375.375 0 0 1-.535-.09.38.38 0 0 1 .045-.47 169 169 0 0 0 3.41-3.845l.095-.11c.46-.54 1.54-1.81 1.425-2.595-.03-.2-.14-.355-.34-.485-.72-.46-1.705.55-1.985.87-.125.14-.335.395-.595.71-.895 1.08-2.555 3.09-4.21 4.635-2.165 2.02-3.71 2.685-4.725 2.035-.765-.49-1.005-1.4-1.215-2.2-.105-.395-.2-.765-.35-1.075-.3-.63-.66-1.04-1.01-1.145-.205-.065-.415-.025-.65.11-.49.285-.425 1.26-.375 1.97.015.215.03.415.03.59 0 .455-.015.955-.035 1.48-.065 1.97-.15 4.425.785 5.215a.38.38 0 0 1 .07.495l-1.05 1.59a.405.405 0 0 0 .09.54L4.63 20.8c.305-.895.98-1.64 1.85-2.025a.37.37 0 0 1 .375.04l3.27 2.405c1.02.34 2.96-.2 5.335-1.49 1.595-.865 3.755-2.33 4.305-3.055.015-.015.025-.03.04-.045.005-.005.685-.655.375-1.15-.41-.655-1.4-.24-2.965.7-.335.2-.63.375-.86.48a.39.39 0 0 1-.475-.125.376.376 0 0 1 .115-.53c1.375-.845 2.795-1.72 4.015-2.8q.121-.105.265-.225c.835-.72 1.54-1.395 1.12-1.96M5.275 21.245l-.005.025 2.275 1.745a.405.405 0 0 0 .535-.04l1.31-1.385-2.79-2.055c-.66.355-1.145.98-1.325 1.71"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGaelicFootball;

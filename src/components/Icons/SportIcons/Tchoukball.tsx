import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTchoukball: React.FC<IconProps> = (props) => {
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
      <path fill="currentColor" d="M3.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      <path
        fill="currentColor"
        d="m22.48 17.225-3.23-10.71c-.005-.02-.01-.045-.005-.065l.25-1.86a.6.6 0 0 0-.02-.24.5.5 0 0 0-.475-.335H4.5a.5.5 0 0 0-.495.435l-.61 4.555c.035 0 .07-.005.105-.005q.465 0 .885.135L4.47 8.5h2.86l-1.18 7H3.535l.065-.505c-.035 0-.07.005-.105.005q-.465 0-.885-.135l-.605 4.545a.6.6 0 0 0 .02.24c.075.21.265.335.475.335h14.56c.01 0 .025-.005.035-.005q.008.001.015-.005c.01-.005.025-.005.035-.01.005 0 .01-.005.015-.005.01-.005.02-.005.03-.01h.005l5-2.115a.51.51 0 0 0 .285-.61m-16.915 1.76H3.07L3.4 16.5h2.58zm10.36-13.97h2.505l-.175 1.32c-.01.055-.01.07-.015.105l-.15 1.06h-2.58zm-3.495 0h2.48L14.49 7.5h-2.48zM14.325 8.5l-.505 3h-2.48l.505-3zM8.93 5.015h2.48L10.99 7.5H8.51zm1.9 3.485-.505 3h-2.48l.505-3zm-6.225-1 .33-2.485h2.98L7.5 7.5zm4.46 11.485h-2.48L7 16.5h2.48zM7.17 15.5l.505-3h2.48l-.505 3zm5.39 3.485h-2.48l.42-2.485h2.48zM10.665 15.5l.505-3h2.48l-.505 3zm5.895 3.485h-2.99l.42-2.485h2.9zm.465-3.485H14.16l.505-3h2.76zm-2.19-4 .505-3h2.615l-.4 3zm2.775 7.18 1.31-9.8 2.47 8.2z"
      />
    </svg>
  );
};
export default SvgTchoukball;

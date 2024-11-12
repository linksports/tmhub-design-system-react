import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgEsciTennis: React.FC<IconProps> = (props) => {
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
        d="M7.165 12.725a1.51 1.51 0 0 1-1.93.35c-.5-.3-.76-.83-.735-1.365H1.455a.134.134 0 0 1-.135-.135v-.37c0-.28.225-.505.505-.505H3.58l-1.435-1a.51.51 0 0 1-.105-.73c.17-.21.475-.24.695-.085l1.42.995-.6-1.65a.504.504 0 0 1 .3-.645L4.2 7.46c.07-.025.145.01.17.08l1.04 2.86c.46-.19 1.005-.15 1.44.155.715.495.865 1.49.315 2.17m13.1-10.335c-2.825-1.975-7.23-.555-9.845 3.18-2.265 3.235-2.44 7.145-.605 9.415.11.14.12.335.015.48L5.815 21.2a.396.396 0 0 0 .1.555l.985.69c.18.125.43.085.555-.1l4-5.715a.394.394 0 0 1 .465-.145c2.77 1.01 6.44-.49 8.73-3.76 2.61-3.73 2.44-8.355-.385-10.335"
      />
    </svg>
  );
};
export default SvgEsciTennis;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFigureSkating: React.FC<IconProps> = (props) => {
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
        d="M2 19.5h20c.275 0 .5-.225.5-.5v-4.495q0-.181-.06-.355c-.295-.845-1.14-1.45-2.085-1.45-4.505 0-8.255-3.205-9.105-7.46v-.01a.93.93 0 0 0-.915-.73H4.99a.99.99 0 0 0-.99.99v6.815c0 .13.065.255.17.33a25.703 25.703 0 0 0 7.325 3.525v2.34h-9.48c-.265 0-.5.2-.515.465a.5.5 0 0 0 .5.535m10.5-2.03v-1.035c.8.2 1.64.37 2.52.5.255.035.515.055.77.055h5.31c.22 0 .4.18.4.4v.71c0 .22-.18.4-.4.4h-8.6zm-2.975-.91c.23.085.17.43-.075.43h-4.6a.923.923 0 0 1-.85-.925v-1.92c0-.18.195-.285.345-.19.025.015.05.035.075.05a26.5 26.5 0 0 0 5.105 2.555"
      />
    </svg>
  );
};
export default SvgFigureSkating;

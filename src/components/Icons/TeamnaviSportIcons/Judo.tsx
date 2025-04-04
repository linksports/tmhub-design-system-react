import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgJudo: React.FC<IconProps> = (props) => {
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
        d="M4.925 6.805C6.07 6.805 7 5.875 7 4.73s-.93-2.075-2.075-2.075a2.07 2.07 0 0 0-2.075 2.07c0 1.15.93 2.08 2.075 2.08M21.12 20.365l-.515-1.155.175-.075c.025-.01.04-.03.05-.05q.014-.037.005-.075L17.68 10.1c-.005-.02-.01-.045 0-.065a.08.08 0 0 1 .04-.05l1.025-.675a.1.1 0 0 0 .035-.035c.01-.015.01-.03.01-.05a.1.1 0 0 0-.015-.05.1.1 0 0 0-.035-.035l-2.295-1.38a.1.1 0 0 0-.055-.015q-.031-.001-.055.02L7.885 13.6a.1.1 0 0 0-.04.06l-1.38 5.85a.07.07 0 0 0 0 .045q.006.024.02.04.014.015.035.03.022.009.045.01l.42.005-.195.74c-.09.35.105.81.45.9l.19.05q.127.03.255.015a.6.6 0 0 0 .24-.085.652.652 0 0 0 .3-.4l.315-1.2.475.005a.1.1 0 0 0 .055-.015.08.08 0 0 0 .035-.045l1.87-4.075q.009-.021.025-.035c.01-.01.025-.015.035-.02l4.515-1.415a.1.1 0 0 1 .065.005c.02.01.04.025.05.045l3.21 5.745c.01.02.03.04.055.045.025.01.05.005.07-.005l.22-.095.475 1.08c.145.33.585.565.915.42l.18-.08c.16-.07.285-.2.345-.365a.64.64 0 0 0-.015-.49M9.49 8.71l2.31.88c.015.005.03.01.045.005s.03-.005.045-.015l3.355-2.185a.1.1 0 0 0 .035-.035c.01-.015.01-.03.01-.045a.1.1 0 0 0-.01-.045.1.1 0 0 0-.035-.035c-.615-.415-3.325-2.25-4.545-3.13-1.38-.995-2.105.115-2.105.115L7.45 6.21c-.27.69-1 1.87-1 1.87l-2.525 2.26.005.01-.49.37a.74.74 0 0 0-.285.48.75.75 0 0 0 .14.54.74.74 0 0 0 .48.285.75.75 0 0 0 .54-.14l.435-.33.245.36q.014.021.035.035.023.014.045.02c.015.005.035 0 .05 0a.2.2 0 0 0 .045-.02l4.215-3.215a.2.2 0 0 1 .045-.02.1.1 0 0 1 .06-.005"
      />
    </svg>
  );
};
export default SvgJudo;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgBadminton: React.FC<IconProps> = (props) => {
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
        d="m5.6 21.595-.82-.575a2.5 2.5 0 0 1-.615-3.48c.315-.45.94-.56 1.395-.245l3.275 2.295c.45.315.56.94.245 1.395a2.504 2.504 0 0 1-3.48.61M10.03 9.44 7.34 7.555l-.88 3.655 2.07 1.45zm7.185-2.29L14.41 5.185a1.003 1.003 0 0 0-1.48.395L11.29 9.1l3.31 2.32 2.75-2.745a.998.998 0 0 0-.135-1.525m-6.355 2.875-1.5 3.22 2.01 1.41 2.515-2.515zm-.21 5.345-1.72-1.205L7.515 17.2c-.05.11-.015.24.085.31l.365.255c.1.07.235.06.32-.03zm7.78-6.36-2.995 2.995L18.3 14.01l3.255-2.16c.585-.39.6-1.25.02-1.655L19.71 8.9a.995.995 0 0 0-1.28.11M8.095 13.585l-1.89-1.325-.84 3.49a.25.25 0 0 0 .1.265l.885.62a.25.25 0 0 0 .37-.1zm9.31 1.02-2.69-1.885-2.515 2.515 2.07 1.45zm-5.92 1.35-2.305 2.3c-.11.11-.095.29.035.38l.885.62c.085.06.195.06.28.005l2.99-1.985zm-1.03-7.435 1.795-3.84a.995.995 0 0 0-.335-1.24L10.05 2.135a1 1 0 0 0-1.545.585L7.59 6.515z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBadminton;

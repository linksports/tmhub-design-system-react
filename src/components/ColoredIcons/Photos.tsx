import { icons } from "../Icons/Icons.css";
import { ColoredIconProps } from "./ColoredIcons.types";
const SvgPhotos: React.FC<ColoredIconProps> = (props) => {
  const { size, style, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      style={style}
      className={[
        icons({
          size,
        }),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <path
        fill="#9CFFFD"
        d="M20.666 4.562a1.53 1.53 0 0 1 1.325 1.681l-1.172 10.365a1.5 1.5 0 0 1-1.706 1.324h-.076V8.433c0-.844-.685-1.528-1.528-1.528H4.775l.28-2.546c.107-.84.865-1.44 1.707-1.35z"
      />
      <path
        fill="#00AD3B"
        d="M19.037 17.932v.917c0 .844-.684 1.528-1.528 1.528H3.528A1.53 1.53 0 0 1 2 18.849v-2.14l4.202-3.055a1.73 1.73 0 0 1 2.215.102L11.22 16.2c.587.498 1.425.57 2.088.179l5.73-3.362z"
      />
      <path
        fill="#5FE18B"
        d="M19.037 8.433v4.584l-5.73 3.362a1.81 1.81 0 0 1-2.088-.179l-2.802-2.444a1.73 1.73 0 0 0-2.215-.102L2 16.71V8.433c0-.844.684-1.528 1.528-1.528h13.98c.845 0 1.529.684 1.529 1.528"
      />
      <path
        fill="#9CFFFD"
        d="M12.187 12.712a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26"
      />
    </svg>
  );
};
export default SvgPhotos;

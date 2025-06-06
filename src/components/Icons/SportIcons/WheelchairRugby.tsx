import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgWheelchairRugby: React.FC<IconProps> = (props) => {
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
        d="M14.93 14.96h-.055a1.5 1.5 0 0 1-1.045-.475 1.48 1.48 0 0 1-.4-1.075c.03-.81.685-1.445 1.495-1.445h.055c.825.03 1.475.725 1.445 1.55a1.49 1.49 0 0 1-1.495 1.445"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.078 5.345a2.025 2.025 0 1 0-3.08-2.63 2.025 2.025 0 0 0 3.08 2.63M18.44 15l-2.425-6.74a1.05 1.05 0 0 0-.26-.395 1 1 0 0 0-.375-.27L12.525 6.44a1 1 0 0 0-.17-.05h-.005c-.015-.005-.03-.005-.045-.01q-.008.001-.015-.005l-5.42-.8a1 1 0 0 0-1.145.935l-.215 4.03a.997.997 0 0 0 .945 1.05.997.997 0 0 0 1.05-.945l.16-2.935 3.085.455-1.8 4.44a1 1 0 0 0 .55 1.3l1.56.63c.71.325 1.27.895 1.575 1.62.325.77.335 1.62.02 2.39a3.11 3.11 0 0 1-1.675 1.705c-.77.325-1.62.335-2.39.02a3.13 3.13 0 0 1-.85-5.285c.42-.355.475-.99.12-1.41a1.004 1.004 0 0 0-1.41-.12 5.2 5.2 0 0 0-1.44 1.99 5.128 5.128 0 0 0 4.75 7.045c.68 0 1.355-.135 2-.41a5.1 5.1 0 0 0 2.75-2.795c.47-1.165.5-2.435.085-3.61a2.247 2.247 0 0 1-1.235-3.845 2.24 2.24 0 0 1 1.56-.63H15c.6.02 1.155.275 1.565.715a2.247 2.247 0 0 1-.19 3.25l.18.5a.993.993 0 0 0 1.28.6A.974.974 0 0 0 18.44 15"
      />
    </svg>
  );
};
export default SvgWheelchairRugby;

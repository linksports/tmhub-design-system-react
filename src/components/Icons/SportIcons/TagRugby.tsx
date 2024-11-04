import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTagRugby: React.FC<IconProps> = (props) => {
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
        d="M15.085 5c.945.66 2.115.45 2.775-.495s.455-2.125-.49-2.785-2.125-.455-2.785.49-.445 2.13.5 2.79M13.435 16.055l-4.915-3.44a1.007 1.007 0 0 0-1.395.245 1.007 1.007 0 0 0 .245 1.395l4.095 2.87L8.6 21.22a1.006 1.006 0 0 0 .245 1.395c.175.12.375.18.57.18.315 0 .625-.15.82-.425l3.44-4.915c.32-.46.21-1.085-.24-1.4"
      />
      <path
        fill="currentColor"
        d="M8.435 16.22a1.007 1.007 0 0 0-1.395.245L3.6 21.38a1.007 1.007 0 0 0 .245 1.395 1.006 1.006 0 0 0 1.395-.245l3.44-4.915a.997.997 0 0 0-.245-1.395M17.79 12.35l-1.09-.325-.14-4.275v-.045c0-.01-.005-.02-.005-.03 0-.015-.005-.03-.005-.045v-.015c0-.01-.005-.02-.005-.025-.005-.02-.005-.035-.01-.05q.001-.007-.005-.015c0-.01-.005-.015-.01-.025a.2.2 0 0 0-.02-.055c0-.005-.005-.01-.005-.015q-.001-.006-.01-.02l-.025-.055c0-.005-.005-.01-.005-.015s-.005-.01-.005-.01 0-.005-.005-.005l-.03-.055c-.005-.005-.005-.01-.01-.015L16.4 7.25l-.005-.005c-.01-.02-.025-.035-.035-.05-.005-.005-.005-.01-.01-.015l-.005-.005s0-.005-.005-.005a1 1 0 0 0-.045-.05l-.01-.01-.01-.01-.055-.055-.005-.005-.005-.005-.07-.055h-.005L13.68 5.26c-.025-.015-.05-.035-.075-.05-.005-.005-.01-.005-.015-.01q-.038-.021-.075-.035l-.025-.01-.025-.01-3.85-1.475a.995.995 0 0 0-1.175.36L6.145 7.305A1.007 1.007 0 0 0 6.39 8.7a1.006 1.006 0 0 0 1.395-.245L9.63 5.82l1.925.735-2.71 3.845-.03.045q-.106-.045-.22-.09c-.965-.325-1.96.135-2.72.605l-.025.01c-2.05.97-3.56.13-3.62.095a.5.5 0 0 0-.565.04.51.51 0 0 0-.165.545l.4 1.255c.035.115.11.21.215.275.305.19.665.285 1.05.285q.143 0 .285-.015.083-.009.165-.025c.705-.135 1.3-.57 1.825-.955.14-.1.27-.2.4-.29.625-.425 1.665-1.135 2.44-.88.25.085.485.24.725.415.03.025.055.05.09.07l2.46 1.72a1 1 0 0 0 .75.165 1 1 0 0 0 .645-.41l1.72-2.455.065 2c.015.43.3.805.715.925l3.03.9a.999.999 0 0 0 1.14-.445 3 3 0 0 1-.56-.31 3.4 3.4 0 0 1-1.27-1.525"
      />
      <path
        fill="currentColor"
        d="M21.29 10.57c-.82-.55-1.86-.55-2.715-.08a.1.1 0 0 0-.055.08c-.115.965.275 1.935 1.095 2.485s1.86.55 2.715.08a.1.1 0 0 0 .055-.08c.11-.965-.275-1.93-1.095-2.485"
      />
    </svg>
  );
};
export default SvgTagRugby;

import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTaspony: React.FC<IconProps> = (props) => {
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
        d="m11.22 15.73-4.915-3.44a1.007 1.007 0 0 0-1.395.245 1.007 1.007 0 0 0 .245 1.395l4.505 3.155.145 4.5a1 1 0 0 0 1 .965h.035a1 1 0 0 0 .965-1.03l-.165-4.995a.98.98 0 0 0-.42-.795"
      />
      <path
        fill="currentColor"
        d="M5.88 15.74a1 1 0 0 0-1.2.745L3.445 21.73a1 1 0 0 0 .975 1.225c.455 0 .865-.31.975-.77l1.23-5.245a1 1 0 0 0-.745-1.2M12.87 4.675c.945.66 2.115.45 2.775-.495s.455-2.125-.49-2.785-2.125-.455-2.785.49-.445 2.13.5 2.79M17.535 9.78l-.965-.145L14.105 6.8l-.01-.01a.1.1 0 0 1-.02-.025q-.006-.007-.02-.015h-.005a.2.2 0 0 0-.035-.03L14 6.705c-.005-.005-.015-.01-.02-.015-.015-.01-.03-.025-.045-.035-.005-.005-.01-.005-.015-.01l-.615-.43-4.3-3.01a1.01 1.01 0 0 0-1.17.015L5.3 5.095a1 1 0 0 0-.205 1.4 1 1 0 0 0 1.4.205l1.96-1.455 1.05.735-2.87 4.095a1 1 0 0 0 .245 1.39l2.46 1.72a1 1 0 0 0 .75.165 1 1 0 0 0 .645-.41l2.705-3.865 1.865 2.145c.155.18.37.3.61.335l2.21.33q.075.009.15.01a1 1 0 0 0 .97-.77 2.49 2.49 0 0 1-1.71-1.345M19.78 10.185a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      />
    </svg>
  );
};
export default SvgTaspony;

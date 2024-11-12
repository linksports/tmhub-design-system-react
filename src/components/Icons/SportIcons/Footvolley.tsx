import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFootvolley: React.FC<IconProps> = (props) => {
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
        d="M6.76 7.695a1 1 0 0 1 .105-1.41l3.13-2.705a.99.99 0 0 1 1.225-.06l2.66 1.865 2.255 1.58 2.255 1.58 1.97.255a.998.998 0 0 1-.125 1.99c-.045 0-.085-.005-.13-.01l-2.21-.285a.96.96 0 0 1-.445-.175l-1.64-1.145-2.87 4.095a1 1 0 0 1-.82.425 1 1 0 0 1-.575-.18l-2.46-1.72a1 1 0 0 1-.245-1.39l2.87-4.095-1-.7L8.17 7.8a1 1 0 0 1-1.41-.105M15.085 5c.945.66 2.115.45 2.775-.495s.455-2.125-.49-2.785-2.125-.455-2.785.49-.445 2.13.5 2.79m6.36 11.345c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.675 1.5-1.5M6.75 19.085c.11-.035.365-.195.535-.305.26-.165.575-.36.935-.515l.46-.655a1.007 1.007 0 0 0-.245-1.395 1.007 1.007 0 0 0-1.395.245l-1.585 2.26c.195.05.38.11.555.17.25.085.585.19.74.195m5.25.71c-.32 0-.695-.175-1.085-.36-.49-.23-1-.47-1.55-.44-.59.03-1.095.35-1.545.63-.34.215-.665.415-.945.45-.33.04-.755-.1-1.16-.23-.52-.17-1.06-.34-1.59-.245-.935.175-1.64.8-2.26 1.355-.065.055-.125.115-.19.17a.504.504 0 0 0-.045.705.495.495 0 0 0 .705.045q.098-.084.195-.175c.545-.49 1.115-.995 1.775-1.115.285-.05.68.075 1.105.21.51.165 1.035.335 1.58.27.505-.06.945-.33 1.365-.595.38-.235.735-.46 1.065-.48.3-.015.675.16 1.07.345.475.225.97.455 1.51.455s1.035-.23 1.51-.455c.175-.08.34-.16.5-.22l-.955-.665c-.38.18-.745.345-1.055.345m10.33 1.33q-.074-.067-.155-.135c-.57-.51-1.35-1.21-2.295-1.385a1.8 1.8 0 0 0-.465-.025q.024.09.04.18c.05.275.04.555-.025.82a1 1 0 0 1 .27.005c.665.125 1.325.715 1.81 1.145q.084.074.16.14a.495.495 0 0 0 .705-.045.49.49 0 0 0-.045-.7m-4.27-1.835-4.63-3.235-4.915-3.44a1.007 1.007 0 0 0-1.395.245 1.007 1.007 0 0 0 .245 1.395l4.915 3.44 4.63 3.235c.175.12.375.18.57.18.315 0 .625-.15.82-.425a.99.99 0 0 0-.24-1.395"
      />
    </svg>
  );
};
export default SvgFootvolley;

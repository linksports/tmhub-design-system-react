import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFistball: React.FC<IconProps> = (props) => {
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
        d="M8.575 1.35c.66-.945 1.84-1.155 2.785-.49.945.66 1.155 1.84.49 2.785s-1.83 1.16-2.775.495-1.165-1.845-.5-2.79m9.605 4.2-2.68.895-2.685-.895q-.009.001-.01-.005l-.05-.015q-.023-.009-.045-.01c-.015-.005-.03-.005-.045-.01-.02-.005-.035-.005-.055-.01-.01 0-.025 0-.035-.005-.02 0-.04-.005-.06-.005H9.61l-4.1-.82V2.105l.155-.025c.545-.09.915-.6.83-1.145-.09-.545-.6-.915-1.145-.83L4.34.27a.995.995 0 0 0-.84.985V5.5a1 1 0 0 0 .805.98l4.195.84v4.17c0 .265.105.52.295.705.19.19.44.295.705.295h3c.265 0 .52-.105.705-.295.19-.19.295-.44.295-.705V7.885l1.685.56q.158.051.315.05a1 1 0 0 0 .315-.05l3-1a.997.997 0 0 0 .63-1.265 1 1 0 0 0-1.265-.63m-3.685 7.95h-4.99c-.55 0-1 .45-1 1s.45 1 1 1h3.515l-1.445 3.61a1 1 0 0 0 .555 1.3 1.01 1.01 0 0 0 1.3-.56l1.995-4.98a.998.998 0 0 0-.93-1.37M9.5 16.185c-.55 0-1 .45-1 1v1.885l-1.785 2.265a1.005 1.005 0 0 0 .165 1.405c.185.145.4.215.62.215.295 0 .59-.13.785-.38l2-2.54a1 1 0 0 0 .215-.62v-2.23c0-.55-.45-1-1-1m9.505-15.7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.675-1.5-1.5-1.5"
      />
    </svg>
  );
};
export default SvgFistball;
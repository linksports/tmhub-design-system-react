import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgKyudo: React.FC<IconProps> = (props) => {
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
        d="M20.535 11.82H18.23c-.005-1.16-.075-3.375-.405-4.49C17.4 5.89 16.3 4.645 15.42 3.645l-.115-.13c-.07-.1-.15-.19-.235-.29-.285-.335-.605-.71-.7-1.4a.35.35 0 0 0-.125-.23A.38.38 0 0 0 14 1.5c-.015 0-.035 0-.05.005a.37.37 0 0 0-.315.42q.009.038.01.075L3.32 11.845a.23.23 0 0 0-.07.155q-.001.046.02.085c.015.025.03.05.055.07l10.32 9.84q-.009.037-.01.075c-.015.1.015.195.07.275.06.08.15.13.245.145.015 0 .035.005.05.005.09 0 .175-.035.245-.09.07-.06.11-.14.125-.23.095-.69.415-1.07.7-1.4.085-.1.165-.195.235-.295l.115-.13c.88-1 1.98-2.245 2.405-3.685.33-1.115.395-3.33.405-4.49h2.305c.045 0 .09-.02.125-.05a.17.17 0 0 0 .05-.125c0-.045-.02-.09-.05-.125a.18.18 0 0 0-.125-.055m-3.43 4.63c-.38 1.285-1.415 2.46-2.25 3.4l-.125.145-.025.03q-.084.112-.205.255c-.25.29-.565.67-.755 1.255L3.82 12.07q-.016-.014-.025-.035c-.005-.015-.01-.025-.01-.04q.001-.024.01-.04.009-.021.025-.035l9.93-9.47c.185.59.505.965.755 1.255q.121.143.205.255l.025.03.125.145c.835.945 1.87 2.12 2.25 3.4.3 1.02.365 3.17.375 4.28h-9.66c-.215-.37-1.1-.655-2.18-.68q-.039 0-.07.03a.1.1 0 0 0-.03.07v1.515q0 .039.03.07.031.03.07.03c1.08-.025 1.965-.305 2.18-.68h9.655c-.005 1.11-.07 3.26-.375 4.28"
      />
    </svg>
  );
};
export default SvgKyudo;

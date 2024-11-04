import { icons } from "../Icons/Icons.css";
import { ColoredIconProps } from "./ColoredIcons.types";
const SvgGift: React.FC<ColoredIconProps> = (props) => {
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
        fill="#F7931E"
        d="m17.608 4.059-1.565-1.566a.887.887 0 0 0-1.263 0l-4.01 4.01 2.828 2.829 4.01-4.011a.887.887 0 0 0 0-1.262"
      />
      <path
        fill="#F7931E"
        d="m6.392 4.059 1.565-1.566a.887.887 0 0 1 1.263 0l4.01 4.01-2.828 2.829-4.01-4.011a.887.887 0 0 1 0-1.262"
      />
      <path
        fill="#00DEEB"
        d="M21.028 5.56H2.972v3.452h18.056zM20.373 9.012H3.627v10.194h16.746z"
      />
      <path fill="#13334C" d="M20.373 9.012H3.627v.623h16.746z" />
      <path fill="#F7931E" d="M13.662 5.56h-3.34v13.646h3.34z" />
    </svg>
  );
};
export default SvgGift;

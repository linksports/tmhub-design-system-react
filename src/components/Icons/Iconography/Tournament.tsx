import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgTournament: React.FC<IconProps> = (props) => {
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
        d="M21.167 5.222h-3.611V3.833A.83.83 0 0 0 16.722 3H7.278a.83.83 0 0 0-.834.833v1.39h-3.61A.83.83 0 0 0 2 6.055V8c0 1.24.781 2.514 2.15 3.496 1.093.789 2.423 1.289 3.819 1.448 1.09 1.81 2.364 2.556 2.364 2.556V18H8.667c-1.226 0-2.223.719-2.223 1.944v.417c0 .23.188.417.417.417H17.14c.23 0 .417-.188.417-.417v-.417c0-1.225-.997-1.944-2.223-1.944h-1.666v-2.5s1.274-.746 2.364-2.556c1.4-.16 2.73-.66 3.82-1.448C21.215 10.515 22 9.24 22 8V6.056a.83.83 0 0 0-.833-.834M5.447 9.694C4.602 9.084 4.223 8.403 4.223 8v-.556h2.23c.034 1.132.2 2.125.444 2.994a5.6 5.6 0 0 1-1.448-.744M19.778 8c0 .559-.614 1.253-1.225 1.694a5.6 5.6 0 0 1-1.451.743c.243-.868.41-1.86.444-2.993h2.233z"
      />
    </svg>
  );
};
export default SvgTournament;

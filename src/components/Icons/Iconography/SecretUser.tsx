import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgSecretUser: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props;
  return (
    <svg
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
        d="M12.5 19.1v-4.3c0-.3 0-.5.1-.7-.6-.1-1.1-.1-1.6-.1-2.7 0-8 1.3-8 4v2h9.6c0-.3-.1-.6-.1-.9M11 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      />
      <g clipPath="url(#secret_user_svg__a)">
        <path
          fill="currentColor"
          d="M21 14.33h-.5v-.95c0-1.31-1.12-2.38-2.5-2.38s-2.5 1.07-2.5 2.38v.95H15c-.55 0-1 .43-1 .95v4.76c0 .52.45.95 1 .95h6c.55 0 1-.43 1-.95v-4.76c0-.52-.45-.95-1-.95m-3 4.29c-.54 0-.98-.43-.98-.95s.44-.95.98-.95.98.43.98.95-.44.95-.98.95m1.52-4.29h-3.04v-.95c0-.81.68-1.48 1.52-1.48s1.52.66 1.52 1.48z"
        />
      </g>
      <defs>
        <clipPath id="secret_user_svg__a">
          <path fill="#fff" d="M14 11h8v10h-8z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSecretUser;

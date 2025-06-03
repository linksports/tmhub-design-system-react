import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgBalloon: React.FC<IconProps> = (props) => {
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
      <mask
        id="balloon_svg__a"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#balloon_svg__a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.957 18.086q-2.646-2.394-4.067-4.495Q5.2 11.095 5.2 8.97q0-3.187 2.051-5.079 2.05-1.89 4.75-1.891 2.697 0 4.748 1.891 2.05 1.892 2.051 5.079 0 2.125-1.689 4.621-1.42 2.1-4.068 4.495c.416.153.707.507.707.92 0 .53-.482.964-1.092.997a2.1 2.1 0 0 0 .522.867 2.09 2.09 0 0 0 3.51-.974.8.8 0 0 1 .059-.16c.1-.198.288-.345.512-.345.282 0 .515.23.469.508a3.2 3.2 0 0 1-.195.683 3.11 3.11 0 0 1-2.876 1.922 3.11 3.11 0 0 1-3.052-2.499h-.19c-.644 0-1.167-.448-1.167-1 0-.412.291-.766.707-.92ZM9.695 4.21a.5.5 0 0 1-.24.666c-.897.421-1.531 1.172-1.89 2.313-.224.709-.2 1.615.14 2.749a.5.5 0 1 1-.96.286c-.372-1.25-.438-2.372-.135-3.335.43-1.367 1.233-2.36 2.42-2.918a.5.5 0 0 1 .665.24Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};
export default SvgBalloon;

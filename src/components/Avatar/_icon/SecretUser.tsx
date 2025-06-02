import { icons } from "../../Icons/Icons.css";
import { IconProps } from "../../Icons/Icons.types";
const SvgSecretUser: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 80 80"
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
        d="M41.669 63.667V49.334c0-1 0-1.667.333-2.334-2-.333-3.667-.333-5.333-.333-9 0-26.667 4.333-26.667 13.333v6.667h32c0-1-.333-2-.333-3M36.668 40c7.364 0 13.334-5.97 13.334-13.333s-5.97-13.333-13.334-13.333-13.333 5.97-13.333 13.333S29.305 40 36.668 40"
      />
      <g clipPath="url(#SecretUser_svg__a)">
        <path
          fill="currentColor"
          d="M70.001 47.766h-1.666V44.6c0-4.367-3.734-7.934-8.334-7.934s-8.333 3.567-8.333 7.934v3.166h-1.667c-1.833 0-3.333 1.434-3.333 3.167V66.8c0 1.733 1.5 3.166 3.333 3.166h20c1.834 0 3.334-1.433 3.334-3.166V50.933c0-1.733-1.5-3.167-3.334-3.167m-10 14.3c-1.8 0-3.266-1.433-3.266-3.166 0-1.734 1.466-3.167 3.266-3.167s3.267 1.433 3.267 3.167-1.467 3.166-3.267 3.166m5.067-14.3H54.935V44.6c0-2.7 2.266-4.934 5.066-4.934s5.067 2.2 5.067 4.934z"
        />
      </g>
      <defs>
        <clipPath id="SecretUser_svg__a">
          <path fill="#fff" d="M46.668 36.666h26.667V70H46.668z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSecretUser;

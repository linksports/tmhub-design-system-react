import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgFollowTeam: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#follow_team_svg__a)">
        <path
          fill="currentColor"
          d="M6 11c-1.66 0-2.99-1.34-2.99-3S4.34 5 6 5c.32 0 .63.05.91.14-.57.81-.9 1.79-.9 2.86s.34 2.04.9 2.86c-.28.09-.59.14-.91.14m5 0c-1.66 0-2.99-1.34-2.99-3S9.34 5 11 5s3 1.34 3 3-1.34 3-3 3m-6.62 2.16C3.55 13.89 3 14.82 3 16v2H0v-2c0-1.54 2.37-2.49 4.38-2.84M11 13c2 0 6 1 6 3v2H5v-2c0-2 4-3 6-3m9 1.84.58-.528C22.64 12.444 24 11.212 24 9.7c0-1.232-.968-2.2-2.2-2.2-.696 0-1.364.324-1.8.836a2.4 2.4 0 0 0-1.8-.836c-1.232 0-2.2.968-2.2 2.2 0 1.512 1.36 2.744 3.42 4.616z"
        />
      </g>
      <defs>
        <clipPath id="follow_team_svg__a">
          <path fill="#fff" d="M24 0H0v24h24z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgFollowTeam;

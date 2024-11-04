import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgMessage: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#message_svg__a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2m7.42 11.142.58.528.58-.524.016-.014C14.646 11.268 16 10.038 16 8.53c0-1.232-.968-2.2-2.2-2.2-.696 0-1.364.324-1.8.836a2.4 2.4 0 0 0-1.8-.836c-1.232 0-2.2.968-2.2 2.2 0 1.51 1.358 2.742 3.415 4.608z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="message_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgMessage;

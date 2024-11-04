import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgCopyLink: React.FC<IconProps> = (props) => {
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
      <g clipPath="url(#copyLink_svg__a)">
        <path
          fill="currentColor"
          d="M6.272 17.727a3.103 3.103 0 0 1 0-4.384l2.829-2.828L7.757 9.17 4.93 12a5 5 0 0 0 0 7.07 5 5 0 0 0 7.071 0l2.828-2.828-1.343-1.343-2.828 2.828a3.103 3.103 0 0 1-4.385 0m3.607-2.192 5.657-5.656-1.415-1.415-5.657 5.657zM12 4.93 9.172 7.757l1.343 1.344 2.829-2.829a3.103 3.103 0 0 1 4.384 0 3.103 3.103 0 0 1 0 4.384l-2.829 2.829 1.344 1.343L19.07 12a5 5 0 0 0 0-7.071 5 5 0 0 0-7.071 0"
        />
      </g>
      <defs>
        <clipPath id="copyLink_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgCopyLink;

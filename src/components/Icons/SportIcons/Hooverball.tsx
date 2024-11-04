import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgHooverball: React.FC<IconProps> = (props) => {
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
        fillRule="evenodd"
        d="M20.065 4.83c-.66.945-1.83 1.16-2.775.495-.945-.66-1.165-1.845-.5-2.79.66-.945 1.84-1.155 2.785-.49.945.66 1.155 1.84.49 2.785m-8.35 17.145 2.62-5.49c.21-.44.07-.97-.33-1.25L10.73 12.94a1.007 1.007 0 0 0-1.395.245 1.007 1.007 0 0 0 .245 1.395l2.585 1.81-2.255 4.725a1.003 1.003 0 0 0 .9 1.435c.375-.005.73-.215.905-.575m-6.58.67L9.15 18.51a1 1 0 0 0 .28-.695v-1.6c0-.55-.45-1-1-1s-1 .45-1 1v1.19l-3.73 3.85a1 1 0 0 0 .02 1.415c.195.19.445.28.695.28.265 0 .525-.1.72-.305M18.77 8.1v-.06c0-.015-.005-.03-.005-.045s-.005-.035-.005-.05V7.94l-.015-.06c0-.01-.005-.02-.005-.03v-.005c-.005-.025-.015-.045-.025-.07-.005-.01-.005-.02-.01-.025-.005-.015-.015-.03-.02-.045a1 1 0 0 0-.26-.355l-.01-.01c-.02-.02-.045-.035-.065-.05l-2.455-1.72q-.015-.006-.03-.02-.021-.015-.05-.03c-.015-.005-.025-.015-.04-.02-.015-.01-.03-.015-.05-.025l-.045-.015c-.015-.005-.03-.015-.05-.02l-.045-.015-.05-.015c-.015-.005-.03-.005-.05-.01-.015-.005-.03-.005-.05-.01-.015 0-.035-.005-.055-.005-.015 0-.03-.005-.045-.005h-.09l-6.385.405c-.475.03-.855.39-.925.84.84.01 1.585.445 2.03 1.095l3.335-.21-.67.955-2.23.605v.055c0 .715-.3 1.355-.78 1.81a1.01 1.01 0 0 0 .88.18l.41-.11q-.068.226-.03.46a1 1 0 0 0 .41.645l2.46 1.72a1 1 0 0 0 .75.165 1 1 0 0 0 .645-.41l3.44-4.915c.005-.01.015-.02.02-.035l.03-.045q.014-.024.02-.04a.2.2 0 0 0 .02-.045q.008-.024.015-.04l.02-.05c.005-.015.005-.025.01-.04l.015-.055c.005-.01.005-.025.005-.035q.009-.029.01-.065-.001-.015.005-.03c0-.02.005-.045.005-.065.01 0 .01-.015.01-.025M7.905 7.63c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHooverball;

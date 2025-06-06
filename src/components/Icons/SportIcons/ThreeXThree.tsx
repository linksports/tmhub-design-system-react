import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgThreeXThree: React.FC<IconProps> = (props) => {
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
        d="M21.49 8.84A4.5 4.5 0 0 1 18 10.5h-1.355q-.069.367-.1.75h3.925c.02.245.035.495.035.75q.001.383-.035.75h-3.925c.16 1.79.865 3.42 1.96 4.72a8.5 8.5 0 0 1-1.065 1.06 9.95 9.95 0 0 1-2.395-5.78H12.75v7.715c-.245.02-.495.035-.75.035a7 7 0 0 1-.75-.035V12.75H8.96a9.96 9.96 0 0 1-2.395 5.78A8.5 8.5 0 0 1 5.5 17.47a8.48 8.48 0 0 0 1.96-4.72H3.535A9 9 0 0 1 3.5 12q-.001-.383.035-.75H7.46A8.48 8.48 0 0 0 5.5 6.53a8.5 8.5 0 0 1 1.065-1.06 9.95 9.95 0 0 1 2.395 5.78h2.29V8.485a4.495 4.495 0 0 1 1.615-6.445A9.997 9.997 0 0 0 2 12c0 5.52 4.475 10 10 10 5.52 0 10-4.48 10-10 0-1.105-.18-2.165-.51-3.16"
      />
      <path
        fill="currentColor"
        d="M12.75 9.895v1.355h2.29q.031-.383.085-.75H15c-.82 0-1.59-.22-2.25-.605M11.5 6c0 1.93 1.57 3.5 3.5 3.5h3c1.93 0 3.5-1.57 3.5-3.5S19.93 2.5 18 2.5h-3c-1.93 0-3.5 1.57-3.5 3.5m6.545.835q.375.21.81.21.247.001.39-.11c.09-.07.14-.165.14-.28q0-.381-.675-.38h-.175V5.72h.175q.264.001.43-.095a.31.31 0 0 0 .17-.285q-.001-.36-.46-.36-.166 0-.355.06a1.5 1.5 0 0 0-.325.145v-.63c.225-.12.465-.175.72-.175q.509-.001.815.245.3.246.3.635.001.546-.5.755.27.069.42.25.15.189.15.475a.8.8 0 0 1-.305.655q-.306.249-.845.25-.54 0-.87-.165v-.645zm-2.64-1.625h.725l.41.745.445-.745h.72l-.85 1.205.8 1.205h-.72l-.425-.755-.455.755h-.705l.86-1.215zm-2.49 1.625q.375.21.81.21.247.001.39-.11c.09-.07.14-.165.14-.28q0-.381-.675-.38h-.18V5.72h.175q.264.001.43-.095a.31.31 0 0 0 .17-.285q-.001-.36-.46-.36-.166 0-.355.06a1.5 1.5 0 0 0-.325.145v-.63c.225-.12.465-.175.72-.175q.509-.001.815.245.3.246.3.635.001.546-.5.755.27.069.42.25.15.189.15.475a.8.8 0 0 1-.305.655q-.306.249-.845.25-.54 0-.87-.165v-.645z"
      />
    </svg>
  );
};
export default SvgThreeXThree;

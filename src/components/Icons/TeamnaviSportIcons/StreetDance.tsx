import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgStreetDance: React.FC<IconProps> = (props) => {
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
        d="m15.236 9.993-2.457-1.72a1 1 0 0 0-1.393.245l-2.218 3.168-1.249-4.114a1 1 0 0 0-1.914.58L7.72 13.8a1 1 0 0 0 .33.49l2.2 1.765v5.973a1 1 0 0 0 2 0V15.99q.037-.041.069-.087l3.163-4.517a1 1 0 0 0-.246-1.393"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.628 16.237c.662-.945 1.83-1.158 2.776-.496s1.163 1.845.5 2.79c-.66.945-1.84 1.153-2.785.491s-1.152-1.84-.49-2.785"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.5 9.437a1 1 0 0 1-.821-1.569l2.402-3.474-2.62-1.571a1 1 0 0 1 1.028-1.716l3.536 2.121a1 1 0 0 1 .308 1.427l-3.01 4.35a1 1 0 0 1-.824.432M13.925 7.634a1 1 0 0 1-.573-.18L6.8 2.863a1 1 0 0 1 1.147-1.637L14.5 5.815a1 1 0 0 1-.575 1.82"
      />
    </svg>
  );
};
export default SvgStreetDance;

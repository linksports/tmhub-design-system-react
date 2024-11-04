import { icons } from "../Icons/Icons.css";
import { ColoredIconProps } from "./ColoredIcons.types";
const SvgGiftItLater: React.FC<ColoredIconProps> = (props) => {
  const { size, style, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      style={style}
      className={[
        icons({
          size,
        }),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <path
        fill="#F7931E"
        d="M8.165 5.46v.539c-.004.33-.15.645-.405.877-.256.232-.6.362-.96.362-.358 0-.703-.13-.958-.362a1.2 1.2 0 0 1-.406-.877V5.46H1.183v12h4.253v-.539c.005-.33.15-.645.406-.876.255-.233.6-.363.959-.363s.703.13.959.362c.255.232.4.547.405.877v.539h14.618v-12z"
      />
      <path
        fill="#FEFEFE"
        d="M6.81 15.206a.33.33 0 0 1-.329-.328v-.562a.328.328 0 1 1 .657 0v.562a.33.33 0 0 1-.328.328m0-2.062a.33.33 0 0 1-.329-.328v-.563a.328.328 0 1 1 .657 0v.563a.33.33 0 0 1-.328.328m0-2.063a.33.33 0 0 1-.329-.328v-.562a.328.328 0 0 1 .657 0v.562a.33.33 0 0 1-.328.328m0-2.062a.33.33 0 0 1-.329-.328v-.563a.328.328 0 0 1 .657 0v.563a.33.33 0 0 1-.328.328M16.2 16.2a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6"
      />
      <g clipPath="url(#GiftItLater_svg__a)">
        <path
          fill="#DC5560"
          d="m16.2 14.205-.435-.396C14.22 12.408 13.2 11.484 13.2 10.35c0-.924.726-1.65 1.65-1.65.522 0 1.023.243 1.35.627a1.8 1.8 0 0 1 1.35-.627c.924 0 1.65.726 1.65 1.65 0 1.134-1.02 2.058-2.565 3.462z"
        />
      </g>
      <defs>
        <clipPath id="GiftItLater_svg__a">
          <path fill="#fff" d="M12.6 7.8h7.2V15h-7.2z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgGiftItLater;

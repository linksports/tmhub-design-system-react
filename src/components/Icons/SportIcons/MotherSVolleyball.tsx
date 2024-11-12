import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgMotherSVolleyball: React.FC<IconProps> = (props) => {
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
        d="M17.5 12.5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.44 3.09a4 4 0 0 0-.57-.27c-.005.005-.005.005-.005.01s-.005.01-.005.015c-.195.37-.33.765-.41 1.175-.005.02-.005.045-.01.06l-.045.235q-.009.076-.01.145c0 .025 0 .045-.005.07-.01.09-.01.175-.01.26.045.03.095.06.14.095q.036.03.08.06c.02.01.04.025.055.035.025.01.045.025.07.045.01.005.02.015.03.02l.025.025c.125.095.245.2.365.3q.008.009.015.01.023.016.045.04c0 .005.005.005.01.01.005 0 .005.005.01.01a5.4 5.4 0 0 1 .95 1.19c0 .005 0 .005.005.01.065.11.12.23.175.345 0 .005.005.01.005.02 0 .005.005.01.005.015.05.1.09.205.13.31.005.015.01.025.02.045.005.02.015.035.02.05.005.005.005.005.005.01.005.005.005.005.005.01l.015.05c0 .01.005.03.01.045.025.085.055.17.08.255.005.01.005.025.01.04q.009.023.01.045c.005.015.005.03.01.045q.016.06.025.12c.005.025.005.045.01.065s.005.04.01.055l.015.065c-.2.17-.42.325-.65.455a3 3 0 0 0-.045-.285c-.01-.05-.025-.1-.03-.15-.025-.105-.05-.215-.08-.32-.01-.035-.025-.07-.035-.105-.005-.02-.015-.035-.02-.055l-.015-.045q-.044-.129-.095-.25a5.166 5.166 0 0 1-4.405.85c-.42-.33-.78-.745-1.05-1.21 1.395.86 3.155.9 4.595.07.185-.105.355-.225.52-.355l-.005-.005v-.005s-.005-.005-.005-.01a4.6 4.6 0 0 0-.81-.945c-.02-.02-.045-.04-.06-.055q-.081-.076-.17-.145l-.125-.09c-.02-.01-.035-.025-.055-.035q-.106-.076-.22-.145c-.05.03-.1.05-.155.075a.7.7 0 0 0-.145.07c-.025.01-.05.025-.07.035-.01.005-.02.005-.035.01-.01.005-.02.005-.03.01q-.219.09-.445.165c-.005.005-.02.005-.025.01a.2.2 0 0 1-.045.015q-.006.006-.02.005h-.01c-.48.15-.985.23-1.495.23h-.02c-.135 0-.26-.01-.39-.02h-.02q-.006-.006-.02-.005a4 4 0 0 1-.34-.045q-.015.001-.045-.005c-.02 0-.04-.005-.055-.005h-.02c-.02-.005-.04-.005-.06-.01-.01-.005-.025-.005-.04-.01-.09-.015-.175-.04-.26-.06-.01 0-.025-.005-.035-.005-.015-.005-.03-.005-.045-.01q-.006.001-.02-.005c-.01 0-.02-.005-.025-.005a1 1 0 0 1-.11-.035.3.3 0 0 1-.065-.025q-.021-.006-.05-.02c-.02-.005-.045-.015-.07-.02a4 4 0 0 1-.065-.755v-.04c.09.04.18.07.27.105l.145.045c.105.035.21.07.32.095.035.005.07.015.105.02.02.005.045.005.06.01s.04.005.055.01l.25.045c-.02-.2-.04-.4-.04-.6 0-1.395.56-2.69 1.505-3.645a4.2 4.2 0 0 1 1.57-.3 4.47 4.47 0 0 0-2.36 3.945c0 .215.02.425.05.63h.02c.415-.02.825-.1 1.22-.23q.031-.009.07-.025a2 2 0 0 0 .35-.135l.065-.03c.08-.04.155-.075.235-.12q.001-.082.01-.165.001-.054.01-.1c.005-.02.005-.045.005-.06q-.001-.036.005-.08c0-.01.005-.025.005-.04q-.001-.023.005-.03.029-.231.08-.47c0-.005 0-.02.005-.025.005-.015.005-.03.01-.045v-.01q.006-.009.005-.01c.115-.495.29-.97.545-1.41 0 0 .005 0 .005-.005v-.005l.01-.01c.065-.11.14-.22.21-.32.005-.005.005-.01.01-.02.005 0 .005-.005.01-.01.065-.095.135-.18.205-.27.01-.01.02-.025.025-.035.01-.015.025-.03.035-.045 0-.005.005-.005.005-.01s.005-.005.005-.01a.2.2 0 0 1 .04-.04l.03-.03c.06-.07.12-.13.18-.2.005-.01.02-.015.025-.025.01-.01.02-.025.03-.035l.03-.03q.039-.038.085-.075c.02-.015.035-.035.055-.05q.022-.016.045-.04c.015-.01.03-.03.045-.045.25.09.495.2.72.34-.075.055-.15.12-.23.165a1 1 0 0 0-.095.09l-.015.015q-.12.111-.24.23c-.025.025-.045.05-.07.075-.01.015-.03.035-.045.05a5.487 5.487 0 0 0-.2.24q.277.112.54.27a5.16 5.16 0 0 1 2.4 3.12 4.1 4.1 0 0 1-.52 1.51 4.38 4.38 0 0 0-2.205-4.02m-6.225-2.025c.47-.305.88-.685 1.35-.985q.594-.384 1.255-.64c.09-.035 1.01-.335 1.01-.33 0-.02-.005-.04-.005-.06-.005-.06-.005-.115-.005-.175v-.21c0-8.53-4.965-9.58-6.425-9.65-.225-.01-.37-.01-.395-.01s-.17 0-.395.01c-1.46.07-6.425 1.115-6.425 9.65 0 1.495-.39 2.75-1.05 3.425a.455.455 0 0 0 .32.77c1.05.015 2.445-.225 3.575-1.355.17-.17.335-.315.5-.45a.46.46 0 0 1 .56-.005 4.73 4.73 0 0 0 2.92 1.02c1.135.005 2.26-.385 3.21-1.005M9.5 13.44c-2.19 0-3.97-2.04-3.97-4.545 0-1.235.43-2.355 1.13-3.175.225-.26.64-.19.77.13.44 1.09 1.745 2.76 5.595 3.01.255.015.45.24.425.495-.2 2.285-1.895 4.085-3.95 4.085"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMotherSVolleyball;

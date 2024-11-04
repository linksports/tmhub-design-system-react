import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
const SvgRhythmicSportsGymnastics: React.FC<IconProps> = (props) => {
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
        d="M16.995 10.529q-.502.001-.98.08c.272.459.288 1.045.006 1.526q.472-.106.974-.106c2.48 0 4.5 2.018 4.5 4.5 0 2.481-2.02 4.5-4.5 4.5a4.498 4.498 0 0 1-2.58-8.184 1.5 1.5 0 0 1-.549-.239l-.83-.581a5.99 5.99 0 0 0-2.041 4.504c0 3.308 2.691 6 6 6 3.308 0 6-2.692 6-6 0-3.309-2.692-6-6-6M6 22.983a1 1 0 0 1-1-1V14.05a1 1 0 1 1 2 0v7.934a1 1 0 0 1-1 1M4.422 10.746a1 1 0 0 1-.954-.702L1.054 2.308a1 1 0 1 1 1.909-.596l2.414 7.736a1 1 0 0 1-.955 1.298"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.755 5.066c-.909.71-2.089.57-2.799-.339s-.572-2.104.338-2.814 2.097-.564 2.807.346.564 2.097-.346 2.807"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.5 6.5h-8.114a3.7 3.7 0 0 0-1.902.49l-3.72 2.092a1 1 0 0 0-.374 1.375l1.007 1.728a1 1 0 0 0 1.367.361l3.214-1.872 2.175 1.523a1 1 0 1 0 1.147-1.638l-1.418-.993.229-.134a1 1 0 0 0 .193-.146l.272-.264a1 1 0 0 0 .284-.522h5.64a1 1 0 1 0 0-2"
      />
    </svg>
  );
};
export default SvgRhythmicSportsGymnastics;

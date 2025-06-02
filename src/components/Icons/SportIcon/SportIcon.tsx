import { SportIcons } from "..";
import { SportIconProps, sportIdComponentMap } from "./SportIcon.types";
const SportIcon: React.FC<SportIconProps> = ({ sportId, ...iconProps }) => {
  const Icon = SportIcons[sportIdComponentMap[sportId] ?? "Others"];
  return <Icon {...iconProps} />;
};
export default SportIcon;

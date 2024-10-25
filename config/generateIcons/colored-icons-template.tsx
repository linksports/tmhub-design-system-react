const coloredIconsTemplate = (variables, { tpl }) => {
  return tpl`
import { icons } from "../Icons/Icons.css";
import { ColoredIconProps } from "./ColoredIcons.types";
${variables.interfaces};
const ${variables.componentName}: React.FC<ColoredIconProps> = (props) => {
  const { size = "md" } = props

  return (
    ${variables.jsx}
  )
};
 
export default ${variables.componentName};
`;
};

module.exports = coloredIconsTemplate;

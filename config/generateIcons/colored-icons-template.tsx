const coloredIconsTemplate = (variables, { tpl }) => {
  return tpl`
import { iconsSizeMap } from "../Icons/Icons.types";
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

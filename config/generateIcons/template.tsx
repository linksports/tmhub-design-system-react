const template = (variables, { tpl }) => {
  return tpl`
import { IconProps, iconsSizeMap } from "../Icons.types";
${variables.interfaces};
const ${variables.componentName}: React.FC<IconProps> = (props) => {
  const { size = "md", color = "#13334C" } = props

  return (
    ${variables.jsx}
  )
};
 
export default ${variables.componentName};
`;
};

module.exports = template;

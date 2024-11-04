const template = (variables, { tpl }) => {
  return tpl`
import { IconProps } from "../Icons.types";
import { icons } from "../Icons.css";
${variables.interfaces};
const ${variables.componentName}: React.FC<IconProps> = (props) => {
  const { size, color, style, className } = props

  return (
    ${variables.jsx}
  )
};
 
export default ${variables.componentName};
`;
};

module.exports = template;

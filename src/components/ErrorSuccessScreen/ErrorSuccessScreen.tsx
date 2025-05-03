import { Button, Icons, Text } from "..";
import Flex from "../Flex";
import { buttonRecipe, iconRecipe, textRecipe } from "./ErrorSuccessScreen.css";
import { ErrorSuccessScreenProps } from "./ErrorSuccessScreen.types";

const ErrorSuccessScreen: React.FC<ErrorSuccessScreenProps> = ({
  type,
  icon,
  title,
  description,
  button,
  className,
  ...props
}) => {
  const Icon = icon && Icons.Iconography[icon];
  return (
    <Flex {...props} direction="column" align="center" className={className}>
      {Icon && <Icon color="unset" className={iconRecipe({ type })} />}
      {title && (
        <Text
          color={type === "error" ? "alert" : "primary"}
          fontSize="lg"
          fontWeight="bold"
          className={textRecipe()}
        >
          {title}
        </Text>
      )}
      {description && (
        <Text color="primary" fontSize="md" className={textRecipe()}>
          {description}
        </Text>
      )}
      {button && (
        <Button
          variant={type !== "empty" ? "primary" : "secondary"}
          onClick={button.onClick}
          className={buttonRecipe()}
        >
          {button.children}
        </Button>
      )}
    </Flex>
  );
};

export default ErrorSuccessScreen;

import { CircleButtonProps } from "./CircleButton.types";
import Button from "../Button";
import { circleButton } from "./CircleButton.css";

const CircleButton: React.FC<CircleButtonProps> = ({ ...props }) => {
  const { variant, ...others } = props;

  return <Button className={circleButton({})} variant={variant} {...others} />;
};

export default CircleButton;

import * as Avatar from "@radix-ui/react-avatar";
import { TeamAvatarProps } from "./TeamAvatar.types";
import { AvatarContainerRecipe, AvatarRecipe } from "../Avatar.css";
import Flex from "../../Flex";
import { TeamAvatarRecipe } from "./TeamAvatar.css";
import Text from "../../Text";
import { AvatarSize } from "../Avatar.types";
import { fontSizeValues } from "../../Text/Text.types";

const TeamTextSizeMap: Record<AvatarSize, (typeof fontSizeValues)[number]> = {
  lg: "2xl",
  mdp: "2xl",
  md: "lg",
  smp: "md",
  sm: "sm",
};

const TeamAvatar: React.FC<TeamAvatarProps> = ({
  name,
  logo,
  size = "md",
  className,
  onClick,
  ...otherProps
}) => {
  return (
    <Avatar.Root
      asChild
      {...otherProps}
      onClick={onClick}
      className={[
        AvatarContainerRecipe({ size, clickable: !!onClick }),
        TeamAvatarRecipe(),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Flex align="center" justify="center">
        {logo ? (
          <>
            <Avatar.Image
              src={logo}
              className={AvatarRecipe()}
              alt="user avatar"
            />
            <Avatar.Fallback delayMs={600} asChild>
              <Text
                fontWeight="bold"
                color="inverse"
                fontSize={TeamTextSizeMap[size]}
              >
                {name.toUpperCase()[0]}
              </Text>
            </Avatar.Fallback>
          </>
        ) : (
          <Text
            fontWeight="bold"
            color="inverse"
            fontSize={TeamTextSizeMap[size]}
          >
            {name.toUpperCase()[0]}
          </Text>
        )}
      </Flex>
    </Avatar.Root>
  );
};

export default TeamAvatar;

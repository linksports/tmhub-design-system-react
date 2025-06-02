import * as Avatar from "@radix-ui/react-avatar";
import { SecretUser, Singles } from "../_icon";
import { UserAvatarProps } from "./UserAvatar.types";
import { AvatarContainerRecipe, AvatarRecipe } from "../Avatar.css";
import Flex from "../../Flex";
import { SecretUserRecipe, UserAvatarRecipe } from "./UserAvatar.css";

const UserAvatar: React.FC<UserAvatarProps> = ({
  logo,
  isSecret,
  size,
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
        UserAvatarRecipe(),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Flex align="center" justify="center">
        {isSecret ? (
          <SecretUser color="inverse" className={SecretUserRecipe()} />
        ) : logo ? (
          <>
            <Avatar.Image
              src={logo}
              className={AvatarRecipe()}
              alt="user avatar"
            />
            <Avatar.Fallback delayMs={600} asChild>
              <Singles color="inverse" className={AvatarRecipe()} />
            </Avatar.Fallback>
          </>
        ) : (
          <Singles className={AvatarRecipe()} color="inverse" />
        )}
      </Flex>
    </Avatar.Root>
  );
};

export default UserAvatar;

import * as Avatar from "@radix-ui/react-avatar";
import { AvatarContainerRecipe, AvatarRecipe } from "../Avatar.css";
import Flex from "../../Flex";
import { OpponentAvatarProps } from "./OpponentAvatar.types";
import { SportIcon } from "../../Icons";
import { OpponentDoubles, OpponentSingles } from "../_icon";
import { OpponentAvatarRecipe, SportIconRecipe } from "./OpponentAvatar.css";

const OpponentAvatar: React.FC<OpponentAvatarProps> = ({
  size = "md",
  type,
  sportId,
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
        OpponentAvatarRecipe(),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Flex align="center" justify="center">
        {(() => {
          switch (type) {
            case "team":
              return (
                <SportIcon
                  color="brandPrimary"
                  sportId={sportId}
                  className={[AvatarRecipe(), SportIconRecipe()]
                    .filter(Boolean)
                    .join(" ")}
                />
              );
            case "singles":
              return (
                <OpponentSingles color="inverse" className={AvatarRecipe()} />
              );
            case "doubles":
              return (
                <OpponentDoubles color="inverse" className={AvatarRecipe()} />
              );
          }
        })()}
      </Flex>
    </Avatar.Root>
  );
};

export default OpponentAvatar;

import { AvatarSize } from "../Avatar.types";

export type UserAvatarProps = {
  isSecret?: boolean;
  logo?: string;
  size?: AvatarSize;
} & React.ComponentProps<"div">;

import { AvatarSize } from "../Avatar.types";

export type TeamAvatarProps = {
  logo?: string;
  name: string;
  size?: AvatarSize;
} & React.ComponentProps<"div">;

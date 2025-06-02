import { AvatarSize } from "../Avatar.types";

export type OpponentAvatarProps = {
  size?: AvatarSize;
  sportId?: number;
} & React.ComponentProps<"div"> &
  (
    | {
        type: "team";
        sportId: number;
      }
    | {
        type: "singles" | "doubles";
      }
  );

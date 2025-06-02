export const avatarSizeValues = ["lg", "mdp", "md", "smp", "sm"] as const;

export type AvatarSize = (typeof avatarSizeValues)[number];

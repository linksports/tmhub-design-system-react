import { AsChildProps } from '../../props/asChild.props';
import { paddingProps } from '../../props/padding.props';

export const sizeValues = ['xs', 'sm', 'md', 'lg', 'full'] as const;
export const alignValues = ['start', 'center', 'end'] as const;

type Props = {
  size?: (typeof sizeValues)[number];
  align?: (typeof alignValues)[number];
  children: React.ReactNode;
} & paddingProps & React.ComponentProps<'div'>;

export type ContainerProps = AsChildProps<Props, 'div'>;

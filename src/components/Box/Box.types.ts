import { AsChildProps } from '../../props/asChild.props';
import { paddingProps } from '../../props/padding.props';
import { boxSizingProps } from '../../props/boxSizing.props';
import { gridItemProps } from '../../props/gridItem.props';
import { flexItemProps } from '../../props/flexItem.props';

export const displayValues = [ 'none', 'inline', 'inline-block', 'block' ] as const;

type Props = {
  as?: 'div' | 'span';
  display?: (typeof displayValues)[number];
  children: React.ReactNode;
} & boxSizingProps & gridItemProps & flexItemProps & paddingProps & React.ComponentProps<'div'>;

export type BoxProps = AsChildProps<Props, 'div'>;

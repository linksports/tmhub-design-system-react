import { AsChildProps } from '../../props/asChild.props';
import { gapProps } from '../../props/gap.props';
import { paddingProps } from '../../props/padding.props';
import { boxSizingProps } from '../../props/boxSizing.props';

export const alignValues = ['start', 'center', 'end', 'baseline', 'stretch'] as const;
export const justifyValues = ['start', 'center', 'end', 'between', 'around'] as const;
export const wrapValues = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export const alignContentValues = ['stretch', 'start', 'end', 'center', 'between', 'around'] as const;

type Props = {
  as?: 'div' | 'span';
  align?: (typeof alignValues)[number];
  justify?: (typeof justifyValues)[number];
  wrap?: (typeof wrapValues)[number];
  alignContent: (typeof alignContentValues)[number];
  children: React.ReactNode;
} & boxSizing & gapProps & paddingProps & React.ComponentProps<'div'>;

export type FlexProps = AsChildProps<Props, 'div'>;

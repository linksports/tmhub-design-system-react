import { AsChildProps } from '../../props/asChild.props';
import { gapProps } from '../../props/gap.props';
import { paddingProps } from '../../props/padding.props';

export const displayValues = ['none', 'inline-grid', 'grid'] as const;
export const columnsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export const rowsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export const flowValues = ['row', 'column', 'dense', 'row-dense', 'column-dense'] as const;
export const alignValues = ['start', 'center', 'end', 'baseline', 'stretch'] as const;
export const justifyValues = ['start', 'center', 'end', 'between'] as const;

type Props = {
  as?: 'div' | 'span';
  display?: (typeof displayValues)[number];
  columns: string | (typeof columnsValues)[number];
  rows: string | (typeof rowsValues)[number];
  flow?: (typeof flowValues)[number];
  align?: (typeof alignValues)[number];
  justify?: (typeof justifyValues)[number];
} & gapProps & paddingProps & React.ComponentProps<'div'>;

export type GridProps = AsChildProps<Props, 'div'>;

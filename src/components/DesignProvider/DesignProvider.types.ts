import { AsChildProps } from '../../props/asChild.props';

type Props = {
  theme?: 'teamhub' | 'play' | 'joynup';
  mode?: 'light' | 'dark';
  children?: React.ReactNode;
} & React.ComponentProps<'div'>;

export type DesignProviderProps = AsChildProps<Props, "div">;

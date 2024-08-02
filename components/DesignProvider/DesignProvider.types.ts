export type DesignProviderProps = {
  theme?: 'teamhub' | 'play' | 'joynup';
  mode?: 'light' | 'dark';
  type?: 'container' | 'page';
  children?: React.ReactNode;
} & React.ComponentProps<'div'>;

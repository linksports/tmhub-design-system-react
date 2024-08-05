export type DesignProviderProps = {
  theme?: 'teamhub' | 'play' | 'joynup';
  mode?: 'light' | 'dark';
  children?: React.ReactNode;
} & React.ComponentProps<'body'>;

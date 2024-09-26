'use client';

import { Slot } from '@radix-ui/react-slot';
import { DesignProviderProps } from './DesignProvider.types';
import {
  teamhubTheme,
  teamhubLightTheme,
  teamhubDarkTheme,
  playTheme
} from '../../tokens/theme.css';
import { designProviderRecipe } from './DesignProvider.css';

const chooseTheme = (theme: string, mode: string) => {
  switch (theme) {
    case 'teamhub':
      if (mode == 'light') {
        return teamhubLightTheme;
      } else if (mode == 'dark') {
        return teamhubDarkTheme;
      }
      return teamhubTheme;
      break;
    case 'play':
      return playTheme;
      break;
    case 'joynup':
      return playTheme;
      break;
  }
  return teamhubTheme;
};

const DesignProvider: React.FC<DesignProviderProps> = ({
  asChild = false,
  ...props
}) => {
  const Component = asChild ? Slot : "div";

  const {
    theme = 'teamhub',
    mode = 'auto',
    className,
    ...others
  } = props;

  return (
    <Component className={[
      'tmhub-design-system-root',
      chooseTheme(theme, mode),
      designProviderRecipe(),
      className
    ].filter(Boolean).join(' ')} {...others} />
  );
};

export default DesignProvider;

import { useState, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { AsChildProps } from '../../util/AsChildProps';
import { DesignProviderProps } from './DesignProvider.types';
import {
  teamhubLightTheme,
  teamhubDarkTheme,
  playTheme,
} from '../../tokens/theme.css';
import { designProviderRecipe } from './DesignProvider.css';

const DesignProvider: React.FC<AsChildProps<DesignProviderProps, "div">> = ({
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

  const [colorMode, setColorMode] = useState(mode);

  let themeClass = teamhubLightTheme;
  if (theme == 'teamhub' && colorMode == 'dark') {
    themeClass = teamhubDarkTheme;
  } else if (theme == 'play') {
    themeClass = playTheme;
  } else if (theme == 'joynup') {
    themeClass = playTheme;
  };

  useEffect(() => {
    if (mode == 'auto') {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setColorMode('dark');
      } else {
        setColorMode('light');
      };
    };
  }, []);

  return (
    <Component className={[
      'tmhub-design-system-root',
      themeClass,
      designProviderRecipe(),
      className
    ].filter(Boolean).join(' ')} {...others} />
  );
};

export default DesignProvider;

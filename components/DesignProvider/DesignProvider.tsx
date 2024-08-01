import { useState, useEffect } from 'react';
import { DesignProviderProps } from './DesignProvider.types';
import {
  teamhubLightTheme,
  teamhubDarkTheme,
  playTheme,
} from '../../tokens/theme.css';
import { designProviderRecipe } from './DesignProvider.css';

const DesignProvider: React.FC<DesignProviderProps> = (props) => {
  const {
    theme = 'teamhub',
    mode = 'auto',
    children,
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
    <div className={['tmhub-design-system-root', themeClass].join(' ')}>
      <div className={designProviderRecipe()}>
        {children}
      </div>
    </div>
  );
};

export default DesignProvider;

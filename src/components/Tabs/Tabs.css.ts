import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../tokens/sprinkles.css';

export const tabsRecipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const tabsListRecipe = recipe({
  base: [
    {
      flexShrink: 0,
      display: 'flex',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '4px',
    }, sprinkles({
      borderColor: {
        lightMode: 'brandLight',
        darkMode: 'brandDark',
      },
    }),
  ],
});

export const tabsTriggerRecipe = recipe({
  base: [
    {
      all: 'unset',
      fontFamily: 'inherit',
      padding: '0 20px',
      height: '32px',
      borderWidth: '1px',
      borderStyle: 'solid',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1,
      backgroundColor: 'inherit',
      userSelect: 'none',
      fontSize: '.625rem',
      ':hover': {
        cursor: 'pointer',
      },
    }, sprinkles({
      borderColor: {
        lightMode: 'brandLight',
        darkMode: 'brandDark',
        lightModeActive: 'brandLight',
        darkModeActive: 'brandDark',
      },
      color: {
        lightMode: 'brandLight',
        darkMode: 'brandDark',
        lightModeActive: 'brandInverseLight',
        darkModeActive: 'brandInverseDark',
      },
      backgroundColor: {
        lightModeActive: 'brandLight',
        darkModeActive: 'brandDark',
      },
    }),
  ],
});

export const tabsContentRecipe = recipe({
  base: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: 'inherit',
    outline: 'none',
  },
});

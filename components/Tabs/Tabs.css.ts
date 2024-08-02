import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../tokens/vars.css';

export const tabsRecipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const tabsListRecipe = recipe({
  base: {
    flexShrink: 0,
    display: 'flex',
    border: `1px solid ${vars.color.brand}`,
    borderRadius: '4px',
  },
});

export const tabsTriggerRecipe = recipe({
  base: {
    all: 'unset',
    fontFamily: 'inherit',
    padding: '0 20px',
    height: '32px',
    border: `1px solid ${vars.color.brand}`,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    backgroundColor: 'inherit',
    color: vars.color.brand,
    userSelect: 'none',
    fontSize: '.625rem',
    ':hover': {
      cursor: 'pointer',
    },
    "&[data-state='active']": {
      backgroundColor: vars.color.brand,
      color: vars.color.brandInverse,
    },
  },
});

export const tabsContentRecipe = recipe({
  base: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: 'inherit',
    outline: 'none',
  },
});

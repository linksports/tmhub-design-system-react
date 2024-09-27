import { layer, globalStyle } from '@vanilla-extract/css';

export const reset = layer('reset');

globalStyle(
  'a, button, fieldset, input', {
    '@layer': {
      [reset]: {
        all: 'unset',
      },
    },
  }
);

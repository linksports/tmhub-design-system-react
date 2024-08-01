import { style } from '@vanilla-extract/css';

export const buttonBase = style({
  display: 'flex',
  padding: '10px 12px',
  borderRadius: '24px',
});

export const buttonSizeSm = style({
  width: '180px',
});

export const buttonSizeMd = style({
  width: '240px',
});

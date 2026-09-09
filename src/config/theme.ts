import type { Theme } from '../types';

// Set brand colours, fonts, corner shapes and maximum page width here.
export const theme = {
  "colours": {
    "background": "#f7f7f2",
    "surface": "#eeefe8",
    "text": "#182116",
    "muted": "#55604f",
    "border": "#c4ccbc",
    "primary": "#182116",
    "onPrimary": "#ffffff",
    "accent": "#49633b",
    "onAccent": "#ffffff",
    "feature": "#dde5d7",
    "onFeature": "#182116"
  },
  "fonts": {
    "body": "\"Helvetica Neue\", Arial, sans-serif",
    "heading": "\"Helvetica Neue\", Arial, sans-serif",
    "accent": "Georgia, serif"
  },
  "shape": {
    "radius": "0rem",
    "buttonRadius": "4rem",
    "contentWidth": "76rem"
  }
} satisfies Theme;

// YourTheme.js

import { create } from '@storybook/theming/create';
import '!style-loader!css-loader!sass-loader!../lib/styles/_all.scss';

const cssVar = (property, defaultValue) =>
  getComputedStyle(document.documentElement).getPropertyValue(property) || defaultValue

export default create({
  base: 'dark',

  colorPrimary: cssVar('--primary', 'red'),
  colorSecondary: cssVar('--color-neon-coral', 'red'),

  // // UI
  appBg: cssVar('--background', 'red'),
  appContentBg: cssVar('--background', 'red'),
  // // appBorderColor: 'grey',
  appBorderRadius: cssVar('--border-radius', '1rem'),

  // // Typography
  fontBase: cssVar('--netcanvas-font-stack', '"Open Sans", sans-serif'),
  // // fontCode: 'monospace',

  // // Text colors
  // textColor: cssVar('--text', 'white'),
  // textInverseColor: cssVar('--text-dark', 'black'),

  // // Toolbar default and active colors
  // // barTextColor: 'silver',
  // // barSelectedColor: 'black',
  // // barBg: 'hotpink',

  // // Form colors
  // // inputBg: 'white',
  // // inputBorder: 'silver',
  // // inputTextColor: 'black',
  // // inputBorderRadius: 4,

  // // brandTitle: 'My custom storybook',
  // // brandUrl: 'https://example.com',
  // // brandImage: 'https://placehold.it/350x150',
});
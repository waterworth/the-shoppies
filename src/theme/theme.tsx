import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode('ink.base', 'white')(props),
      },
    }),
  },
  colors: {
    sky: {
      lighter: '#f9fafb',
      light: '#f4f6f8',
      base: '#dfr3e8',
      dark: '#c4cdd5',
    },
    ink: {
      lightest: '#919eab',
      lighter: '#637381',
      light: '#454f5b',
      base: '#212b36',
    },
    titleBar: {
      light: '#b3b5cb',
      base: '#43467f',
      dark: '#1c2260',
      darker: '#00044c',
    },
    purple: {
      lighter: '#f6f0fd',
      light: '#e3d0ff',
      base: '#9c6ade',
      dark: '#50248f',
      darker: '#230051',
      text: '#50485a',
    },
    indigo: {
      lighter: '#f4f5fa',
      light: '#b3bcf5',
      base: '#5c6ac4',
      dark: '#202e78',
      darker: '#000639',
      text: '#3e4155',
    },
    blue: {
      lighter: '#ebf5fa',
      light: '#b4e1fa',
      base: '#006fbb',
      dark: '#084e8a',
      darker: '#001429',
      text: '#3e4e57',
    },
    teal: {
      lighter: '#e0f5f5',
      light: '#b7ecec',
      base: '#47c1bf',
      dark: '#00848e',
      darker: '#003135',
      text: '#405352',
    },
    green: {
      lighter: '#e3f1df',
      light: '#bbe5b3',
      base: '#50b83c',
      dark: '#108043',
      darker: '#173630',
      text: '#414f3e',
    },
    yellow: {
      lighter: '#fcf1cd',
      light: '#ffea8a',
      base: '#eec200',
      dark: '#846116',
      darker: '#573b00',
      text: '#595130',
    },
    orange: {
      lighter: '#fcebdb',
      light: '#ffc58b',
      base: '#f49342',
      dark: '#c05717',
      darker: '#4a1504',
      text: '#594430',
    },
    red: {
      lighter: '#fbeae5',
      light: '#feaad9a',
      base: '#de3618',
      dark: '#bf0711',
      darker: '#330101',
      text: '#583c35',
    },
  },
});

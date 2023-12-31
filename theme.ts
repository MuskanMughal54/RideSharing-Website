import { extendTheme } from '@chakra-ui/react';

const theme = {
  breakpoints: {
    '2xl': '1520px',
  },
  sizes: {
    container: {
      '2xl': '1520px',
    },
  },
  colors: {
    gray: {
      50: '#F5F5F7',
      100: '#E6E6E9',
      200: '#D6D6DB',
      300: '#b9b9b9',
      400: '#a2a2a2',
      500: '#AAAAAA',
      600: '#717171',
      700: '#6f6f6f',
      800: '#595959',
      900: '#414141',
    },
    primary: {
      50: '#8EED7B',
      100: '#7BCE6A',
      200: '#68B05A',
      300: '#56934A',
      400: '#44773A',
      500: '#345C2C',
      600: '#24421E',
      700: '#152A10',
      800: '#071405',
      900: '#010301',
    },
    'lavender-blue': {
      50: '#f5f4f8',
      100: '#ebeaf2',
      200: '#d7d4e4',
      300: '#c2bfd7',
      400: '#aea9c9',
      500: '#9A94BC',
      600: '#7b7696',
      700: '#5c5971',
      800: '#3e3b4b',
      900: '#1f1e26',
    },
    'powder-blue': {
      50: '#f7fafd',
      100: '#eff5fa',
      200: '#dfebf6',
      300: '#d0e1f1',
      400: '#c0d7ed',
      500: '#B0CDE8',
      600: '#8da4ba',
      700: '#6a7b8b',
      800: '#46525d',
      900: '#23292e',
    },
  },
  styles: {
    global: {
      '.flex': {
        display: 'flex',
      },
      '.flex-wrap': {
        flexWrap: 'wrap',
      },
      '.flex-col': {
        flexDirection: 'column',
      },
      '.items-start': {
        alignItems: 'flex-start',
      },
      '.items-center': {
        alignItems: 'center',
      },
      '.items-end': {
        alignItems: 'flex-end',
      },
      '.justify-start': {
        justifyContent: 'flex-start',
      },
      '.justify-center': {
        justifyContent: 'center',
      },
      '.justify-end': {
        justifyContent: 'flex-end',
      },
      '.justify-between': {
        justifyContent: 'space-between',
      },
      '.justify-around': {
        justifyContent: 'space-around',
      },
      '.justify-evenly': {
        justifyContent: 'space-evenly',
      },
      '.grow-1': {
        flexGrow: 1,
      },
      '.no-scrollbar::-webkit-scrollbar': {
        width: '0 !important',
      },
    },
  },
};

export default extendTheme(theme);

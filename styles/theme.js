
import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: 'CRC-BOLD, CRC-LIGHT',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [{
          fontFamily: 'CRC-BOLD',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 400,
          src: `
            local('CRC-BOLD'),
            url('/assets/fonts/CRC-BOLD.woff') format('woff')`
        },
        {
          fontFamily: 'CRC-LIGHT',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 400,
          src: `
            local('CRC-LIGHT'),
            url('/assets/fonts/CRC-LIGHT.woff') format('woff')`
        }],
      }
    },
    MuiCard: {
      root: {
        borderRadius: 10,
        boxShadow: '0 2px 12px 0 #2774FE',
      }
    },
  },
  palette: {
    primary: {
      light: '#4791db',
      main: '#2774FE',
      dark: '#ecebed',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#555e6c',
      main: '#0066ff',
      dark: '#1e2532',
      contrastText: '#ffffff'
    },
    danger: {
      light: '#c944dd',
      main: '#eb196e',
      dark: '#b20000',
      contrastText: '#ffffff'
    },
    background: {
      default: '#182231',
      primary: '#0F1927'
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff'
    },
  },
  custom: {
    palette: {
      white: '#ffffff',
      black: '#000000',
      grey: '#8399b8',
      orange: '#d36738',
      red: '#ef6c6c',
      yellow: '#efc865',
      green: '#50e9d2',
      blue: '#2774FE',
      border: '#999999'
    },
    layout: {
      topAppBarHeight: 60,
      maxDesktopWidth: 1110,
      maxMarketPlaceWidth: 1366
    },
  }
}));

export default theme;

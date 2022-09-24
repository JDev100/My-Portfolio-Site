import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', '#fefefe')(props),
      bg: mode('#DCDCDC', '#141214')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#9b0000', '  ')(props),
      textUnderlineOffset: 3
    })
  },
  Button: {
    baseStyle: props => ({
      
      // color: mode('#9b0000', '#73adff')(props),
    })
  } 
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({
  config,
  components,
  styles
});

export default theme;
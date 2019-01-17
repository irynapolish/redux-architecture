import { primary } from 'colors';

export default () => ({
  'native.Text': {
    backgroundColor: '#0000',
    color: 'white',
    paddingVertical: 2,
    '.smallTitle': {
      fontSize: 18,
    },
    '.title': {
      fontSize: 24,
    },
    '.subheading': {
      fontSize: 16,
    },
    '.caption': {
      fontSize: 12,
    },
    '.secondary': {
      color: '#00000075',
    },
    '.inverted': {
      color: 'black',
    },
    '.accented': {
      color: '#660DEC',
    },
    '.bold': {
      fontWeight: 'bold',
    },
    '.italic': {
      fontStyle: 'italic',
    },
    '.primary': {
      color: primary,
    },
  },
});

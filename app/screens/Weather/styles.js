import { StyleSheet } from 'react-native';
import { grey, white } from 'colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 24,
  },
  errorText: {
    textAlign: 'center',
    color: white,
  },
  textContainer: {
    paddingVertical: 6,
    paddingHorizontal: 40,
  },
  bottomImage: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 3,
  },
  divider: {
    height: 40,
    backgroundColor: grey,
  },
});

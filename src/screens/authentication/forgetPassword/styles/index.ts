import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { largeFont, smallFont } from '../../../../theme/responsiveFonts';
import { boldText, regularText } from '../../../../theme/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 30,
    justifyContent: 'space-evenly',
  },
  containerStyle: { marginVertical: 20 },
  title: {
    color: colors.fontBlack,
    fontSize: largeFont,
    ...boldText,
  },
  description: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...regularText,
  },
  text: {
    color: colors.disableFont,
    fontSize: largeFont,
  },
});
export default styles;

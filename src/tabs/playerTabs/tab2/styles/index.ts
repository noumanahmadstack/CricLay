import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {regularText} from '../../../../theme/fonts';
import {mediumFont} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  noPlayerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPlayerTxt: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...regularText,
  },
});
export default styles;

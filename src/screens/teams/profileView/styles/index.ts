import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {regularText} from '../../../../theme/fonts';
import {smallFont} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  IDText: {
    textAlign: 'center',
    fontSize: smallFont,
    color: colors.disableFont,
    ...regularText,
  },
});
export default styles;

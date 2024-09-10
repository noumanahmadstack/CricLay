import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {regularText} from '../../../theme/fonts';
import {smallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  txt: {
    color: colors.red,
    fontSize: smallFont,
    ...regularText,
  },
});
export default styles;

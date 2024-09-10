import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {regularText, semiBoldText} from '../../../theme/fonts';
import {smallFont} from '../../../theme/responsiveFonts';

const styles = StyleSheet.create({
  text1: {
    color: colors.fontBlack,
    fontSize: smallFont,
    textAlign: 'center',
    ...regularText,
  },
  text2: {
    color: colors.fontOrange,
    fontSize: smallFont,
    textAlign: 'center',
    ...semiBoldText,
  },
});
export default styles;

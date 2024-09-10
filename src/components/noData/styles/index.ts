import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {semiBoldText} from '../../../theme/fonts';
import {smallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  title: {
    color: colors.fontBlack,
    fontSize: smallFont,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 10,
    ...semiBoldText,
  },
});
export default styles;

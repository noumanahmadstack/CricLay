import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {semiBoldText} from '../../../theme/fonts';
import {marginHorizontal} from '../../../theme/margins';
import {smallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  topPerformerTitle: {
    color: colors.fontBlack,
    fontSize: smallFont,
    marginHorizontal: marginHorizontal,
    ...semiBoldText,
  },
});
export default styles;

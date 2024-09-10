import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {mediumFont, smallFont} from '../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: marginHorizontal,
  },
  title: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  viewAll: {
    color: colors.viewAllGray,
    fontSize: smallFont,
    ...regularText,
  },
});
export default styles;

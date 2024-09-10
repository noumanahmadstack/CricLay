import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
import {xsmallFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: marginHorizontal,
  },
  itemContainer: {
    alignItems: 'center',
  },
  title: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  desc: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

import { StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
import { semiBoldText } from '../../../../../../theme/fonts';
import { xsmallFont } from '../../../../../../theme/responsiveFonts';
import { marginHorizontal } from '../../../../../../theme/margins';
const styles = StyleSheet.create({
  filterBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: marginHorizontal,
    marginBottom: 0,
  },
  title: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText
  }
});
export default styles;

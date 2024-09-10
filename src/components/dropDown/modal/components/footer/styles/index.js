import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {semiBoldText} from '../../../../../../theme/fonts';
import {xsmallFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  footerContainer: {
    padding: 5,
    borderColor: colors.borderColor,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerTexts: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    padding: 5,
    ...semiBoldText,
  },
});
export default styles;

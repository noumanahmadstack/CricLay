import {StyleSheet} from 'react-native';
import {mediumFont, xsmallFont} from '../../../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../../../theme/fonts';
import colors from '../../../../../../../theme/colors';
import {marginHorizontal} from '../../../../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    marginHorizontal,
  },
  listedTitle: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  playerName: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
  seprator: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 10,
  },
});
export default styles;

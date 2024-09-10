import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
import {xsmallFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: marginHorizontal,
    marginBottom: 10,
  },
  internalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    justifyContent: 'space-between',
  },
  seprator: {borderWidth: 1, borderColor: colors.lightGray},
  offlineDataCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offlineDataCount: {
    color: colors.fontBlack,
    marginRight: 2,
    fontSize: xsmallFont,
    ...regularText,
  },
  overlayURL: {
    color: colors.themeBlue,
    marginRight: 2,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
});
export default styles;

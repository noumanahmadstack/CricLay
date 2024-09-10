import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {regularText} from '../../../theme/fonts';
import {marginHorizontal} from '../../../theme/margins';
import {xsmallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  containers: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.borderColor,
    marginHorizontal: marginHorizontal,
    borderRadius: 35,
    marginTop: 15,
  },
  itemContainer: {
    borderRadius: 35,
    minHeight: 37,
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  selectedItemContainer: {
    backgroundColor: colors.themeBlue,
  },
  amateurselectedItemContainer: {
    backgroundColor: colors.themeBlue,
  },
  title: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
  selectedTitle: {
    color: colors.white,
  },
});
export default styles;

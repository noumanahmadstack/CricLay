import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {regularText, semiBoldText} from '../../../theme/fonts';
import {mediumFont, xsmallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: 80,
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  locationIconContainer: {
    backgroundColor: colors.themeBlue,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleDescContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  title: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  desc: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../../../theme/colors';
import {smallFont, xsmallFont} from '../../../../../../theme/responsiveFonts';
import {semiBoldText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minWidth: width / 1.15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    marginVertical: 10,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
    marginHorizontal: marginHorizontal,
  },
  headerContainer: {
    backgroundColor: colors.themeBlue,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  topTableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  bottomTableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  innerLeftContainer: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: colors.borderColor,
    flex: 1,
    padding: 15,
  },
  innerRightContainer: {
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },
  headerTitle: {
    color: colors.white,
    fontSize: smallFont,
    ...semiBoldText,
  },
  name: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {marginHorizontal} from '../../../../theme/margins';
import {boldText, regularText} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';
import {
  largeFont,
  mediumFont,
  smallFont,
} from '../../../../theme/responsiveFonts';

const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: 'row',
  },
  imageSize: {
    height: 180,
  },
  mainWrapper: {
    flex: 1,
  },
  headerSafeView: {
    // backgroundColor: '#001B42',
    backgroundColor: colors.themeBlue,
    opacity: 0.9,
    height: 180,
  },
  flexDirection: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: marginHorizontal,
  },
  headerTitle: {
    flex: 0.5,
    color: colors.white,
    fontSize: largeFont,
    ...boldText,
  },
  nameRow: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: marginHorizontal,
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  name: {
    color: colors.white,
    fontSize: mediumFont,
    ...boldText,
  },
  dateRow: {
    marginHorizontal: marginHorizontal,
  },
  dateId: {
    color: colors.white,
    fontSize: smallFont,
    ...regularText,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default styles;

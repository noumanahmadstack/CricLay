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
  iconSize: {
    height: 40,
    width:40
  },
  headerSafeView: {
    backgroundColor: '#001B42',
    opacity: 0.9,
    height: 180,
  },
  flexDirection: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: marginHorizontal,
  },
  headerTitle: {
    flex: 1,
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
  baseStyle:{
     margin: 6,
      padding: 5 
  }
  
});
export default styles;

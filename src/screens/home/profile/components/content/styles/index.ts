import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../../../theme/colors';
import {
  mediumFont,
  smallFont,
  xsmallFont,
} from '../../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minWidth: width / 1.15,
    height: 125,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    marginVertical: 10,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
    marginHorizontal: marginHorizontal,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  pointTableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  teamName: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
  },
  pointContainer: {
    alignItems: 'center',
  },
  points: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  name: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
  teamIcon: {
    position: 'absolute',
    right: 10,
    top: -15,
  },
});
export default styles;

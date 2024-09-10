import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {semiBoldText} from '../../../../theme/fonts';
import {smallFont} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  style: {
    marginHorizontal: 15,
    marginTop: 5,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  indicatorStyle: {
    backgroundColor: colors.barOrange,
    width: 40,
    left: 70,
    top: 40,
  },
  indicatorContainerStyle: {
    backgroundColor: colors.white,
  },
  labelStyle: {
    textTransform: 'none',
    ...semiBoldText,
    fontSize: smallFont,
  },
});

export default styles;

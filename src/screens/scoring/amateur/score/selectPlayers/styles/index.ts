import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../../../theme/colors';
import {semiBoldText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
import {xsmallFont} from '../../../../../../theme/responsiveFonts';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  internalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    marginBottom: 10,
    marginHorizontal: marginHorizontal,
    ...semiBoldText,
  },
  btnStyle: {
    minWidth: width / 2.5,
  },
});
export default styles;

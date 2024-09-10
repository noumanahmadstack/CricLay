import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {semiBoldText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
import {mediumFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeBlue,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: marginHorizontal,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.white,
    fontSize: mediumFont,
    ...semiBoldText,
  },
});
export default styles;

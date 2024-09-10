import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {semiBoldText} from '../../../../theme/fonts';
import {mediumFont} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonTitle: {
    color: colors.white,
    ...semiBoldText,
    fontSize: mediumFont,
  },
  gradient: {
    minHeight: 40,
    minWidth: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
export default styles;

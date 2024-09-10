import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {semiBoldText} from '../../../theme/fonts';
import {largeFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  buttonTitle: {
    color: colors.white,
    ...semiBoldText,
    fontSize: largeFont,
  },
  gradient: {
    minHeight: 55,
    minWidth: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
export default styles;

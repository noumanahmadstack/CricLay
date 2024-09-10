import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {largeFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputBackground,
    flexDirection: 'row',
    alignItems: 'center',
  },
  country: {
    fontSize: largeFont,
  },
});
export default styles;

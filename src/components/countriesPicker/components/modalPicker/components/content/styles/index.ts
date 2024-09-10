import {StyleSheet} from 'react-native';
import colors from '../../../../../../../theme/colors';
import {regularText} from '../../../../../../../theme/fonts';
import {smallFont} from '../../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: colors.fontBlack,
    fontSize: smallFont,
    marginLeft: 5,
    ...regularText,
  },
});
export default styles;

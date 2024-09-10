import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {semiBoldText} from '../../../theme/fonts';
import {smallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginBottom: 10,
  },
  vsTxt: {
    color: colors.disableFont,
    fontSize: smallFont,
    alignSelf: 'center',
    ...semiBoldText,
  },
});
export default styles;

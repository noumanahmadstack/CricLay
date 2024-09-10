import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {regularText} from '../../../theme/fonts';
import {xsmallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
  },
  searchBtn: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

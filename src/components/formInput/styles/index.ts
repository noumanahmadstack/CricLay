import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {regularText, semiBoldText} from '../../../theme/fonts';
import {smallFont, xsmallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  inputStyle: {
    marginLeft: 5,
    flex: 1,
    ...regularText,
    color: colors.fontBlack,
    fontSize: smallFont,
  },
  inputContainer: {
    marginTop: 15,
  },
  titleStyle: {
    fontSize: xsmallFont,
    color: colors.disableFont,
    marginBottom: 5,
    ...semiBoldText,
  },
  focusedTitleStyle: {
    color: colors.fontBlack,
  },
  textInputContainerStyle: {
    backgroundColor: colors.inputBackground,
    borderRadius: 4,
  },
});
export default styles;

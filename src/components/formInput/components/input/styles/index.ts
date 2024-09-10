import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../../theme/fonts';
import {xsmallFont} from '../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    minHeight: 50,
  },
  maxText: {
    textAlign: 'right',
    padding: 5,
    color: colors.black,
    fontSize: xsmallFont,
    ...regularText,
  },
  errorText: {
    color: colors.red,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  forgotPasswordTitle: {
    color: colors.fontBlack,
    ...semiBoldText,
    fontSize: xsmallFont,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 15,
    marginRight: 15,
    marginTop: 5,
  },
  focusedTitleStyle: {
    color: colors.fontBlack,
  },
});
export default styles;

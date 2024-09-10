import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {regularText, semiBoldText} from '../../../theme/fonts';
const styles = StyleSheet.create({
  inputStyle: {
    marginLeft: 5,
    flex: 1,
    ...regularText,
    color: colors.fontBlack,
  },
  inputContainer: {
    marginTop: 15,
  },
  titleStyle: {
    color: colors.disableFont,
    marginBottom: 5,
    fontSize: 14,
    ...semiBoldText,
  },
  textInputContainerStyle: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 16,
  },
  filledtextInputColor: {
    borderColor: colors.fontBlack,
  },
});
export default styles;

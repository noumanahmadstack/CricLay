import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../theme/fonts';
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    minHeight: 47,
  },
  maxText: {
    textAlign: 'right',
    padding: 5,
    color: colors.black,
    fontSize: 12,
    ...regularText,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
    ...semiBoldText,
  },
  forgotPasswordTitle: {
    color: colors.white,
    ...semiBoldText,
    fontSize: 12,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 15,
    marginRight: 15,
    marginTop: 5,
  },
  internalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    marginVertical: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  title: {
    marginLeft: 5,
    color: colors.white,
    fontSize: 14,
    ...regularText,
  },
});
export default styles;

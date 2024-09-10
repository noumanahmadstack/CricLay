import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { semiBoldText } from '../../../theme/fonts';
import { xsmallFont } from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  message: {
    color: colors.themeBlue,
    fontSize: xsmallFont,
    textAlign: 'center',
    marginLeft: 5,
    ...semiBoldText,
  },
  messageContainer: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: colors.grayLight,
    alignSelf: 'center',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
export default styles;

import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { regularText } from '../../../../theme/fonts';
import { smallFont, xsmallFont } from '../../../../theme/responsiveFonts';
import { semiBoldText } from '../../../../theme/fonts';
const styles = StyleSheet.create({
  IDText: {
    textAlign: 'center',
    fontSize: smallFont,
    color: colors.disableFont,
    ...regularText,
  },
  btnStyle: {
    minWidth: 110,
    minHeight: 24,
    borderRadius: 30,
    marginTop: 5
  },
  btnTitle: {
    fontSize: xsmallFont,
    ...semiBoldText
  },
  dp: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
export default styles;

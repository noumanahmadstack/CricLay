import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {boldText, regularText, semiBoldText} from '../../../../theme/fonts';
import {largeFont, smallFont} from '../../../../theme/responsiveFonts';
const btnStyle = {
  borderRadius: 4,
  marginTop: 13,
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: colors.fontBlack,
    fontSize: largeFont,
    marginBottom: 30,
    ...boldText,
  },
  emailBtnContainer: {
    borderWidth: 1,
    borderColor: colors.black,
    ...btnStyle,
  },
  facebookBtnContainer: {
    backgroundColor: colors.fbBlue,
    ...btnStyle,
  },
  googleBtnContainer: {
    backgroundColor: colors.googleRed,
    ...btnStyle,
  },
  appleBtnContainer: {
    backgroundColor: colors.appleLightDark,
    ...btnStyle,
  },
  text1: {
    color: colors.fontBlack,
    fontSize: smallFont,
    textAlign: 'center',
    ...regularText,
  },
  text2: {
    color: colors.fontOrange,
    fontSize: smallFont,
    textAlign: 'center',
    ...semiBoldText,
  },
});
export default styles;

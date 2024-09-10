import { StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';
import { semiBoldText } from '../../../../../theme/fonts';
import { smallFont, xsmallFont } from '../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  actionBtnTitle: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
    marginLeft: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: colors.darkRed,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 39,
    alignSelf: 'center',
    marginLeft: 4,
  },
  outBtnColor:{backgroundColor:colors.darkRed
  },
  amateurOutBtnColor:{
    backgroundColor:colors.darkAmateurPink
  },
  actionBtnColor: {
    backgroundColor: colors.actionOrange,
  },
  amateurActionBtnColor: {
    backgroundColor: colors.extaraDarkRed,
  },
  undoBtnColor: {
    backgroundColor: colors.themeBlue,
  },
  amateurUndoBtnColor:{
    backgroundColor:colors.amateurPink
  },
  bottomBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5
  },
  remainingScoreOvers: {
    color: colors.barOrange,
    fontSize: smallFont,
    marginTop: 10,
    textAlign: 'center',
    ...semiBoldText,
  },
});
export default styles;
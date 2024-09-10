import { StyleSheet } from 'react-native';
import colors from '../../../../../../../theme/colors';
import { regularText, semiBoldText } from '../../../../../../../theme/fonts';
import { marginHorizontal } from '../../../../../../../theme/margins';
import {
  mediumFont,
  smallFont,
  xsmallFont,
} from '../../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  matchPlayerContainer: {
    margin: marginHorizontal,
  },
  inputContainer: {
    marginHorizontal: marginHorizontal,
    marginBottom: 20
  },
  outTitle: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    marginHorizontal,
    bottom: 2,
    ...regularText,
  },
  playerContainer: {
    alignItems: 'center',
  },
  placeholderIconContainer: {
    backgroundColor: colors.lightGray,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  dp: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  playerName: {
    color: colors.disableFont,
    fontSize: smallFont,
    ...regularText,
  },
  playerNameColor: {
    color: colors.fontBlack,
  },
  internalContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: marginHorizontal,
    justifyContent:'space-between',
    minHeight: '30%',
  },
  errorText: {
    textAlign: 'center',
  },
  noPlayerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPlayerTxt: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...regularText,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btnStyle: {
    flex: 1,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderColor: colors.borderColor,
  },
  outBtnStyle: {
    flex: 1,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: colors.borderColor,
    borderBottomRightRadius: 10,
    backgroundColor: colors.darkAmateurPink,
  },
  contentContainerStyle: {
    padding: marginHorizontal,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.placeholderColor,
    margin: 4,
    padding: 5,
    borderRadius: 8,
  },
  title: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    textAlign: 'center',
    ...regularText,
  },
  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    margin: 20
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    //  position:"relative",
    //  bottom:2,
    margin: 20,

  },
  buttonStyle: {
    backgroundColor: colors.themeBlue,
    padding: 10
  },
  buttonText: {
    color: colors.white,
    fontSize: smallFont,
    textAlign: 'center',
    ...semiBoldText,
  },
  extraTypeBtnContainer: {
    backgroundColor: colors.whiteContainer,
    minWidth: '40%',
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginHorizontal,
    borderRadius: 4,
  },
  selectedExtraType: {
    backgroundColor: colors.actionOrange,
    borderWidth: 0,
  },
});
export default styles;

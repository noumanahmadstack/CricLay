import {StyleSheet} from 'react-native';
import colors from '../../../../../../../theme/colors';
import {regularText} from '../../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../../theme/margins';
import {mediumFont, smallFont} from '../../../../../../../theme/responsiveFonts';
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
  extraTypeBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 30,
  },
  inputContainer: {
    marginHorizontal: marginHorizontal,
  },
  outTitle: {
    color: colors.fontBlack,
    fontSize: mediumFont,
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
    maxHeight: '100%',
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
    backgroundColor: colors.darkRed,
  },
  extraTypeBtnContainer: {
    backgroundColor: colors.whiteContainer,
    minWidth: '40%',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 4,
  },
  selectedExtraType: {
    backgroundColor: colors.actionOrange,
    borderWidth: 0,
  },
});
export default styles;

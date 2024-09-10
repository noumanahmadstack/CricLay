import {StyleSheet} from 'react-native';
import colors from '../../../../../../../theme/colors';
import {regularText} from '../../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../../theme/margins';
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
    // minHeight: '30%',
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
  contentContainerStyle: {
    padding: marginHorizontal,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.placeholderColor,
    margin: 4,
    paddingHorizontal: 5,
    minHeight: 50,
    borderRadius: 8,
  },
  title: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    textAlign: 'center',
    ...regularText,
  },
  toggleView:{
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:4
    },
    switchBtnMargin:{
      marginVertical:5
    }
});
export default styles;

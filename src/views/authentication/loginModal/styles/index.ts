import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../theme/fonts';
import {marginHorizontal} from '../../../../theme/margins';
import {
  mediumFont,
  smallFont,
  xsmallFont,
} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  safeAreaViewContainer: {
    // flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: marginHorizontal,
    borderRadius: 10,
  },
  titleContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    // flexDirection: 'row',
  },
  contentContainer: {
    // padding: 20,
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex:1
  },
  loginTitle: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  crossIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 100,
  },
  desc: {
    color: colors.fontBlack,
    fontSize: smallFont,
    padding: 20,
    ...regularText,
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.grayIcon,
    borderBottomLeftRadius: 10,
    flex: 1,
  },
  actionBtnTitle: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
    // flex:1
  },
  registerBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.themeBlue,
    borderBottomRightRadius: 10,
    flex: 1,
  },
});
export default styles;

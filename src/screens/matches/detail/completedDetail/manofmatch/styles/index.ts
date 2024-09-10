import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {semiBoldText} from '../../../../../../theme/fonts';
import {mediumFont, xsmallFont} from '../../../../../../theme/responsiveFonts';
import {marginHorizontal} from '../../../../../../theme/margins';
const styles = StyleSheet.create({
  message: {
    color: colors.darkRed,
    fontSize: xsmallFont,
    textAlign: 'center',
    ...semiBoldText,
  },
  overInnings: {
    height: 30,
    width: 50,
    alignSelf: 'flex-end',
    top: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    position: 'absolute',
  },
  formate: {
    height: 30,
    minWidth: 50,
    alignSelf: 'flex-end',
    top: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    position: 'absolute',
  },
  oversInningTitle: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  seperator: {
    height: 0.5,
    backgroundColor: colors.grayLight,
    width: '100%',
    marginVertical: marginHorizontal,
  },
  matchStatus: {
    minHeight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    right: 15,
    top: 0,
  },
  matchStatusTxt: {
    color: colors.white,
    textAlign: 'center',
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  messageContainer: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: colors.grayLight,
    alignSelf: 'center',
    borderRadius: 7,
  },
  container: {
    backgroundColor: colors.white,
    margin: marginHorizontal,
    marginBottom: -15,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  player: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  dp: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  name: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyImage: {
    alignSelf: 'center',
  },
  btnContainer: {
    marginVertical: marginHorizontal,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../theme/fonts';
import {
  mediumFont,
  smallFont,
  xsmallFont,
} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  primaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  secondaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: colors.borderColor,
    padding: 10,
  },
  secondaryRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamIcon: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  titleDescContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },
  trashContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    position:"absolute",
    right:10
    // marginLeft: 10,
  },
  title: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  desc: {
    color: colors.disableFont,
    fontSize: smallFont,
    ...regularText,
  },
  playerCount: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

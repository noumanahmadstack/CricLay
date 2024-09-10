import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../theme/fonts';
import {xsmallFont} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  runsContainer: {
    minHeight: 30,
    minWidth: 30,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 2,
    borderColor: colors.themeBlue,
  },
  rightInternalContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  internalContainer: {
    flex: 1,
    alignItems: 'center',
  },
  leftInternalContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  playerName: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  playerRuns: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

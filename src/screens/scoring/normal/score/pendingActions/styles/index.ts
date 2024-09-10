import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
import {mediumFont, smallFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  internalContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: marginHorizontal,
  },
  secondaryContainer: {
    alignItems: 'center',
    minHeight: '18%',
    padding: marginHorizontal,
    justifyContent: 'space-around',
  },
  pendingActionTitle: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...regularText,
  },
  pendingActionText: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
});
export default styles;

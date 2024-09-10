import {StyleSheet} from 'react-native';
import {smallFont, xsmallFont} from '../../../../../../../theme/responsiveFonts';
import {semiBoldText} from '../../../../../../../theme/fonts';
import colors from '../../../../../../../theme/colors';
import {marginHorizontal} from '../../../../../../../theme/margins';
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grayLight,
    paddingHorizontal: marginHorizontal,
  },
  lineupTitle: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
  },
  lineupContainer: {
    width: '40%',
  },
  cardTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  scoreTypeTitle: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
    flex: 1,
    textAlign: 'center',
  },
});
export default styles;

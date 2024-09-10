import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {regularText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
import {smallFont, xsmallFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    marginHorizontal,
  },
  contentContainer: {
    paddingRight: 100,
  },
  itemInternalContainer: {
    height: 40,
    minWidth: 80,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  scoreText: {
    color: colors.white,
    fontSize: xsmallFont,
    paddingHorizontal: 5,
    ...regularText,
  },
  hashText: {
    color: colors.fontBlack,
    fontSize: smallFont,
    marginLeft: 6,
    alignSelf: 'center',
    ...regularText,
  },
  seprator: {
    margin: 3,
  },
});
export default styles;

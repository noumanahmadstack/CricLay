import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {semiBoldText} from '../../../../../../theme/fonts';
import {xsmallFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  internalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
});
export default styles;

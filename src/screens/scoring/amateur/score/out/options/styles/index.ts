import {StyleSheet} from 'react-native';
import colors from '../../../../../../../theme/colors';
import {regularText} from '../../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../../theme/margins';
import {xsmallFont} from '../../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: marginHorizontal,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    textAlign: 'center',
    ...regularText,
  },
});
export default styles;

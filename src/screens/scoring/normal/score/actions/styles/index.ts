import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {regularText} from '../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../theme/margins';
import {xsmallFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal,
    justifyContent: 'space-around'
  },
  title: {
    textAlign:"center",
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;
import { StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
import { semiBoldText } from '../../../../../../theme/fonts';
import { marginHorizontal } from '../../../../../../theme/margins';
import { smallFont } from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  remainingScoreOvers: {
    color: colors.barOrange,
    fontSize: smallFont,
    marginTop: 10,
    textAlign: 'center',
    ...semiBoldText,
  },
  videoContainer: {
    margin: marginHorizontal
  }
});
export default styles;
import {StyleSheet} from 'react-native';
import {semiBoldText} from '../../../../theme/fonts';
import {smallFont} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    justifyContent: 'center',
  },
  disabledContainer: {
    opacity: 0.5,
  },
  leftChild: {
    position: 'absolute',
    left: 15,
  },
  title: {
    ...semiBoldText,
    fontSize: smallFont,
    textAlign: 'center',
  },
});
export default styles;

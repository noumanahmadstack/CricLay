import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../theme/colors';
import {semiBoldText} from '../../../theme/fonts';
import {mediumFont} from '../../../theme/responsiveFonts';
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height / 2,
  },
  title: {
    color: colors.disableFont,
    fontSize: mediumFont,
    ...semiBoldText,
    textAlign: 'center',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {semiBoldText} from '../../../../../../theme/fonts';
import {smallFont} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    backgroundColor: colors.themeBlue,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titleText: {
    color: colors.white,
    fontSize: smallFont,
    ...semiBoldText,
  },
  formInputContainerStyle: {
    marginHorizontal: 20,
  },
});
export default styles;

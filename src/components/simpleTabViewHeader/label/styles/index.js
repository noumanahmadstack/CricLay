import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../theme/fonts';
import {xsmallFont} from '../../../../theme/responsiveFonts';

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  description: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    textAlign: 'center',
    ...regularText,
  },
});
export default styles;

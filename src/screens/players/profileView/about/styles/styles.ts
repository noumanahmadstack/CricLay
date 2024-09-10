import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {marginHorizontal} from '../../../../../theme/margins';
import {smallFont} from '../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../theme/fonts';

const styles = StyleSheet.create({
  listViewContainer: {
    margin: marginHorizontal,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    borderRadius: 4,
  },
  title: {
    flex: 1,
    color: colors.black,
    fontSize: smallFont,
    ...semiBoldText,
  },
  desc: {
    color: colors.black,
    flex: 1,
    fontSize: smallFont,
    ...regularText,
  },
});
export default styles;

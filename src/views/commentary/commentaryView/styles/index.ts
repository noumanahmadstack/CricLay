import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {xsmallFont} from '../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../theme/fonts';
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.primaryRed,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  amateuritemContainer: {
    backgroundColor: colors.darkAmateurPink,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  primaryItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  description: {
    color: colors.white,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

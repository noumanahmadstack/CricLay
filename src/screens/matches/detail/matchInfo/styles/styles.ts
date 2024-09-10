import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {marginHorizontal} from '../../../../../theme/margins';
import {xsmallFont} from '../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../theme/fonts';

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: marginHorizontal,
    borderRadius: 8,
  },
  listViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  title: {
    flex: 1,
    color: colors.black,
    fontSize: xsmallFont,
    padding: 15,
    ...semiBoldText,
  },
  desc: {
    color: colors.black,
    flex: 1,
    fontSize: xsmallFont,
    padding: 15,
    ...regularText,
  },
  seprator: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    height: '100%',
  },
});
export default styles;

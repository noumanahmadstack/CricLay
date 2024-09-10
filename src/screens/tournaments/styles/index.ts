import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {largeFont, smallFont, xsmallFont} from '../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../theme/fonts';
import { marginHorizontal } from '../../../theme/margins';
const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: marginHorizontal
  },
  flatListView: {
    flex: 1,
    borderRadius: 20,
    height: 120,
  },
  backGroundImage: {
    flex: 1,
    borderRadius: 10,
  },

  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
  },
  innerContent: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.8,
    backgroundColor: '#001B42',
    borderRadius: 10,
  },
  TournamentTitle: {
    fontSize: largeFont,
    ...semiBoldText,
    color: colors.white,
    paddingHorizontal: 10,
  },
  location: {
    fontSize: smallFont,
    ...regularText,
    color: colors.white,
    paddingHorizontal: 10,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
  },
  noDetailText: {
    fontSize: xsmallFont,
    ...regularText,
    color: colors.disableFont,
    textAlign: 'center',
    marginTop: 4,
  },
});
export default styles;

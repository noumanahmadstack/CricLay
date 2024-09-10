import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { regularText } from '../../../theme/fonts';
import { marginHorizontal } from '../../../theme/margins';
import { xsmallFont } from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    maxHeight: 50,
    borderColor: colors.borderColor,
    marginHorizontal: marginHorizontal,
    borderRadius: 35,
    marginTop: 15,
    backgroundColor: colors.white,
  },
  itemContainer: {
    borderRadius: 35,
    minHeight: 35,
    margin: 7,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  internalItemContainer: {
    borderRadius: 35,
    minHeight: 35,
    paddingHorizontal: 15,
    margin: 7,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedItemContainer: {
    backgroundColor: colors.themeBlue,
  },
  amateurSelectedItemContainer: {
    backgroundColor: colors.amateurPink,
  },
  title: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
  selectedTitle: {
    color: colors.white,
  },
  leftChild: {
    marginRight: 7
  }
});
export default styles;

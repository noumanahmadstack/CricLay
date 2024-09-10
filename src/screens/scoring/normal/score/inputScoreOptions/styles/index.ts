import { StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
import { regularText, semiBoldText } from '../../../../../../theme/fonts';
import { marginHorizontal } from '../../../../../../theme/margins';
import {
  mediumFont,
  smallFont,
  xsmallFont,
} from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...regularText,
  },
  extrasTitle: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
  actionBtnTitle: {
    color: colors.white,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  extraBtnContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    marginLeft: 3,
  },
  columnWrapperStyle: {
    marginHorizontal,
    justifyContent: 'space-around',
    marginBottom: 5,
    marginTop: 10
  },
  extraColumnWrapper: {
    justifyContent: 'center',
  },
  seprator: {
    margin: 3,
  },
  inputBtnContainer: {
    backgroundColor: colors.white,
    minHeight: 39,
    minWidth: '12.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: colors.borderColor
  },
});
export default styles;

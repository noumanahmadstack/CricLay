import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {semiBoldText} from '../../../../theme/fonts';
import {marginHorizontal} from '../../../../theme/margins';
import {smallFont} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
  },
  containerStyle: {
    marginHorizontal: marginHorizontal,
  },
  dpContainer: {
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyDp: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoTitle: {
    color: colors.disableFont,
    marginTop: 5,
    fontSize: smallFont,
    ...semiBoldText,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {marginHorizontal} from '../../../../../theme/margins';
import {mediumFont} from '../../../../../theme/responsiveFonts';
import {semiBoldText} from '../../../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackOpacity,
    justifyContent: 'center',
  },
  internalContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: marginHorizontal,
    padding: 15,
  },
  touchableArea: {
    flex: 1,
  },
  btnContainer: {
    marginVertical: 30,
  },
  ModalText: {
    textAlign: 'center',
    color: colors.black,
    fontSize: mediumFont,
    ...semiBoldText,
  },
});
export default styles;

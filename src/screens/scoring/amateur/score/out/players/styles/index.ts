import {StyleSheet} from 'react-native';
import colors from '../../../../../../../theme/colors';
import {regularText} from '../../../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../../../theme/margins';
import {mediumFont} from '../../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  internalContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: marginHorizontal,
    flex: 1,
    minHeight: '42%',
  },
  errorText: {
    textAlign: 'center',
  },
  noPlayerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPlayerTxt: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...regularText,
  },
});
export default styles;

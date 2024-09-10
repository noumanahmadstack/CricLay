import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {marginHorizontal} from '../../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackOpacity,
    justifyContent: 'center',
  },
  primaryContainer: {
    backgroundColor: colors.white,
    marginHorizontal: marginHorizontal,
    borderRadius: 10,
  },
  inputContainer: {
    paddingHorizontal: marginHorizontal,
  },
  touchableArea: {
    flex: 1,
  },
  btnContainer: {
    marginVertical: 30,
  },
});
export default styles;

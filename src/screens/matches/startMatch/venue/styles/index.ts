import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {marginHorizontal} from '../../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: marginHorizontal,
  },
  fieldContainerStyle: {
    marginHorizontal: marginHorizontal,
  },
  inputField: {
    backgroundColor: colors.white,
  },
  btnContainer: {
    flexDirection: 'row',
  },
});
export default styles;

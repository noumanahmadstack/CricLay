import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {marginHorizontal} from '../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: marginHorizontal,
  },
  dp: {
    marginTop: 10,
    height: 120,
    width: 120,
    borderRadius: 100,
    alignSelf: 'center',
  },
  btnContainer: {marginTop: 20},
});
export default styles;

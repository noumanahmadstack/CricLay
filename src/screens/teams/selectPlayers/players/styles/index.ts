import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {marginHorizontal} from '../../../../../theme/margins';
const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 15,
  },
  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    marginHorizontal: marginHorizontal,
  },
});
export default styles;

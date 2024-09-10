import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeBlue,
  },
  childContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logo: {
    alignSelf: 'center',
  },
});
export default styles;

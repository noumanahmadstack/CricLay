import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {regularText} from '../../../../../../theme/fonts';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
  },
  internalContainer: {
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 69,
    width: 69,
    borderColor: colors.white,
    borderRadius: 100,
    borderWidth: 3,
  },
  title: {
    color: colors.fontBlack,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 5,
    ...regularText,
  },
});
export default styles;

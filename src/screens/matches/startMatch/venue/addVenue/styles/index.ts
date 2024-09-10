import { StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
import { marginHorizontal } from '../../../../../../theme/margins';
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: marginHorizontal,
  },
  inputFields: {
    backgroundColor: colors.white,
  },
  btnContainer: {
    marginVertical: 30,
  },
  map: {
    flex: 1,
    zIndex: -100,
  },
  keyboardStyle: { flex: 1 },
  autoCompleteContainer: {
    position: 'absolute',
    zIndex: 100,
    top: 10,
    width: '95%',
    alignSelf: 'center',
  },
});
export default styles;

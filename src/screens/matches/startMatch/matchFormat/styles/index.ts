import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {marginHorizontal} from '../../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: marginHorizontal,
  },
  keyBoardWrapper:{
    flex:1
  },
  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
  },
  btnContainer: {
    marginVertical: 20,
  },
  ballErrorTxt: {
    textAlign: 'center',
  },
});
export default styles;

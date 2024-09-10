import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {marginHorizontal} from '../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  keyBoardWrapper:{
    flex:1
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  internalContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: marginHorizontal,
    height: '40%',
  },
  contentContainerStyle: {
    padding: marginHorizontal,
  },
  crossBtn: {
    borderRadius: 50,
    marginVertical: 20,
    padding: 5,
    alignSelf: 'flex-start',
  },
  formInputContainerStyle: {
    marginBottom: 15,
    marginTop: 0,
  },
  error:{
    color:colors.red
  }
});
export default styles;

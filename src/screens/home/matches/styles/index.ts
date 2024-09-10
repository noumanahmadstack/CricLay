import {StyleSheet, Dimensions} from 'react-native';
import {marginHorizontal} from '../../../../theme/margins';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  contentContainerStyle: {
    padding: marginHorizontal,
  },
  paginationLoader: {
    width,
  },
  emptyTextContainer: {minHeight: 0, minWidth: '100%'},
});
export default styles;

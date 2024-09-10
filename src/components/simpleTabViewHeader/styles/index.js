import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {marginHorizontal} from '../../../theme/margins';

const styles = StyleSheet.create({
  style: {
    backgroundColor: colors.inputBackground,
    marginHorizontal,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  indicatorStyle: {
    backgroundColor: colors.barOrange,
  },
  indicatorContainerStyle: {
    backgroundColor: colors.inputBackground,
  },
});

export default styles;
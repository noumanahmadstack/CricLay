import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {marginHorizontal} from '../../../theme/margins';
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.themeBlue,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  homeIcon: {
    position: 'absolute',
    top: -3,
  },
  headerStyle: {
    backgroundColor: colors.themeBlue,
  },
  headerLeftIcon: {
    marginLeft: marginHorizontal,
  },
  headerRightIcon: {
    marginRight: marginHorizontal,
  },
});
export default styles;

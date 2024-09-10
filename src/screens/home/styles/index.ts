import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../theme/colors';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  topHeaderContainer: {
    width: width / 3.5,
    alignSelf: 'center',
    height: 80,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: colors.themeBlue,
    transform: [{scaleX: 4}, {scaleY: 1.3}],
  },
  joinNowBanner: {
    height: 150,
    width: '90%',
    alignSelf: 'center',
    marginTop: -10,
  },
});
export default styles;

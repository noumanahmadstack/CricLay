import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { regularText } from '../../../theme/fonts';
import { smallFont } from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeBlue,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
  },
  isAmateurBackground: {
    backgroundColor: colors.darkAmateurPink
  },
  title: {
    ...regularText,
    color: colors.white,
    fontSize: smallFont,
  },
  crossIcon: {
    position: 'absolute',
    right: 15,
    zIndex: 100,
  },
  backIcon: {
    position: 'absolute',
    left: 15,
    zIndex: 100,
  },
});
export default styles;

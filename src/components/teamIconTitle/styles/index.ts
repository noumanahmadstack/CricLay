import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {regularText} from '../../../theme/fonts';
import {smallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row:{
    flexDirection:"row"
  },
  gradientContainer: {
    padding: 3,
    borderRadius: 50,
  },
  teamPlaceholder: {
    height: 65,
    width: 65,
    borderRadius: 50,
    backgroundColor: colors.teamIconGray,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.darkShadowColor,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  name: {
    color: colors.fontBlack,
    marginTop: 3,
    fontSize: smallFont,
    textAlign: 'center',
    ...regularText,
  },
  over: {
    color: colors.disableFont,
    marginTop: 3,
    fontSize: smallFont,
    textAlign: 'center',
    ...regularText,
  },
  selectedName: {
    color: colors.primaryRed,
  },
  icon:{
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 100
  },
imageIconWrapper:{
  width:80,
  alignItems:"center",
  justifyContent:"center"
}
});
export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {xsmallFont} from '../../../../theme/responsiveFonts';
import {regularText} from '../../../../theme/fonts';
const styles = StyleSheet.create({
  itemContainer: {
    elevation: 6,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  overBallNumber: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
  commentary: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    width: '75%',
    ...regularText,
  },
  scoresContainer: {
    backgroundColor: colors.teaPink,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  amateurScoresContainer: {
    backgroundColor: colors.darkAmateurPink,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {xsmallFont} from '../../../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../../../theme/fonts';
import colors from '../../../../../../../theme/colors';
import {marginHorizontal} from '../../../../../../../theme/margins';
const styles = StyleSheet.create({
  cardTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  scoreText: {
    color: colors.blackOpacity,
    fontSize: xsmallFont,
    ...regularText,
    textAlign: 'center',
    flex: 1,
  },
  renderItemView: {
    flexDirection: 'row',
    marginHorizontal,
  },
  playerParentContainer: {
    width: '40%',
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedPlayerName: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...semiBoldText,
    width: 120,
  },
  selectedPlayerColor: {
    color: colors.fontBlack,
  },
  playerName: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
    width: 120,
  },
  playerImage: {
    borderWidth: 1,
    height: 18,
    width: 18,
    borderRadius: 100,
    borderColor: colors.black,
    marginRight: 5,
  },
  playerStatus: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

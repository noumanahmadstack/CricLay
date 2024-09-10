import {StyleSheet} from 'react-native';
import {
  mediumFont,
  smallFont,
  xsmallFont,
  xssmallFont,
} from '../../../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../../../theme/fonts';
import colors from '../../../../../../../theme/colors';
import {marginHorizontal} from '../../../../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingBottom: 15,
    paddingTop: 10,
    margin: marginHorizontal,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  contentContainerStyle: {
    paddingHorizontal: marginHorizontal,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineupTitle: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  lineupContainer: {
    width: '40%',
  },
  cardTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  scoreTypeTitle: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
    flex: 1,
    textAlign: 'center',
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
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
    width: 120,
  },
  wicketType: {
    color: colors.disableFont,
    fontSize: xssmallFont,
    ...regularText,
    width: 120,
  },
  wicketTypeBlack: {
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
  listHeaderComponentStyle: {
    marginBottom: 10,
  },
  seprator: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 10,
  },
});
export default styles;

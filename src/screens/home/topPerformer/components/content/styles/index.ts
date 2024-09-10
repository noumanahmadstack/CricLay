import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {smallFont, xsmallFont} from '../../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../../theme/fonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    minHeight: 190,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    marginVertical: 10,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },
  performerNameContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    justifyContent: 'space-between',
  },
  pointTableContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  rankingContainer: {
    height: 30,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    marginLeft: 13,
  },
  rankingTxt: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  totalScoreContainer: {
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
  },
  totalScore: {
    color: colors.white,
    textAlign: 'center',
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  playerNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerName: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
  },
  pointContainer: {
    alignItems: 'center',
  },
  points: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
  },
  name: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
  viewFullLeaderBoardContainer: {
    backgroundColor: colors.themeBlue,
    minHeight: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    zIndex: -1,
  },
  viewFullLeaderBoardTxt: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
});
export default styles;

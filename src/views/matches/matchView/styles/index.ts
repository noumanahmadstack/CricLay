import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { smallFont, xsmallFont } from '../../../../theme/responsiveFonts';
import { regularText, semiBoldText } from '../../../../theme/fonts';
import { marginHorizontal } from '../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    minHeight: 205,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 15,
  },
  nameContainer: {
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  teamMatchesContainer: {
    flex: 1,
    paddingHorizontal: marginHorizontal,
    justifyContent: 'space-evenly',
  },
  streamingMatchesContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  activityLoaderStreaming: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  youtubePlayer: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  youtubePlayerRounded: { borderRadius: 20 },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fixtureImageContainer: {
    alignItems: 'center',
  },
  vsIcon: { alignSelf: 'center' },
  teamRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamTitle: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
    marginLeft: 5,
    width: 90,
  },
  teamTitleAlignCenter: {
    textAlign: 'center'
  },
  teamScore: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  teamOver: {
    color: colors.disableFont,
    marginRight: 5,
    fontSize: xsmallFont,
    ...regularText,
  },
  overInnings: {
    height: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    top: 0,
    left: 10,
    position: 'absolute'
  },
  date: {
    fontSize: xsmallFont,
    ...regularText,
    color: colors.viewAllGray,
  },
  oversInningTitle: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  matchStatus: {
    minHeight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    right: 15,
    top: 0,
  },
  matchStatusTxt: {
    color: colors.white,
    textAlign: 'center',
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  matchStatusRedTxt: {
    color: colors.red,
  },
  scorerGradient: {
    minHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: marginHorizontal
  },
  scorerGradientFixture: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scorerGradientScorer: {
    minHeight: 20,
  },
  contentContainer: {
    marginHorizontal,
    marginTop: 27,
    marginBottom: 10
  },
  matchesName: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
  },
  fixtureView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  fixtureBottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.themeBlue,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 8,
  },
  amateurfixtureBottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.amateurPink,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 8,
  },
  bottomText: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  bottomResultText: {
    color: colors.red,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  resultBottomView: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    borderColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoURL: {
    height: 34,
    width: 34,
    borderRadius: 8,
  },
});
export default styles;

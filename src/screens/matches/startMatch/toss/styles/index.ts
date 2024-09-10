import { StyleSheet } from 'react-native';
import colors from '../../../../../theme/colors';
import { regularText, semiBoldText } from '../../../../../theme/fonts';
import { marginHorizontal } from '../../../../../theme/margins';
import { mediumFont } from '../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  internalContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: marginHorizontal,
    minHeight: '42%',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginBottom: 20,
  },
  vsTxt: {
    color: colors.disableFont,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  teamPlaceholderContainer: {
    alignItems: 'center',
  },
  teamPlaceholder: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: colors.teamIconGray,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.darkShadowColor,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  teamName: {
    color: colors.fontBlack,
    marginTop: 3,
    fontSize: mediumFont,
    textAlign: 'center',
    ...regularText,
  },
  decideTxt: {
    color: colors.fontBlack,
    marginTop: 1,
    fontSize: mediumFont,
    textAlign: 'center',
    ...semiBoldText,
  },
  decideOptContainer: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 2,
    minWidth: 70,
    alignItems: 'center',
  },
  selectedDecideOptContainer: {
    backgroundColor: colors.decisionLightBlue,
  },
  decideOptTxt: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...regularText,
  },
  errorText: {
    textAlign: 'center',
  },
  startScoringBtnContainer: { paddingBottom: 20 },
});
export default styles;

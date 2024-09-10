import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { regularText, semiBoldText } from '../../../../theme/fonts';
import { mediumFont, smallFont, xsmallFont, xssmallFont } from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  internalContainer: { flexDirection: "row", alignItems: 'center' },
  crossIcon: {
    position: 'absolute',
    zIndex: 1,
    right: -10,
    top: -10
  },
  disableContainer: {
    backgroundColor: colors.lightGray,
  },
  rowPading: {
    flexDirection: "row",
    padding: 15
  },
  row: {
    flexDirection: "row"
  },
  dp: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  teamPlayersContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameContainer: {
    flex: 1,
    marginLeft: 15,
  },
  bowlerStatContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  name: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    ...semiBoldText,
  },
  label: {
    color: colors.white,
    fontSize: xssmallFont,
    paddingHorizontal: 5,
    paddingVertical: 2,
    ...semiBoldText
  },
  pointViewTableContainer: {
    backgroundColor: colors.white
  },
  headingName: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  id: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
  point: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
    textAlign: "center"
  },
  initialPoint: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...semiBoldText,
    textAlign: "center"
  },
  inviteBtn: {
    minHeight: 30,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  invitedBtn: {
    minHeight: 30,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  inviteBtnTitle: {
    color: colors.white,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  invitedBtnTitle: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
  addToTeamBtn: {
    backgroundColor: colors.inputBackground,
    width: 110,
    minHeight: 30,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToMatchTitle: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    textAlign: 'center',
    ...regularText,
  },
  pointView: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5

  },
  initialPointView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  matIcon: {
    alignSelf: "center"
  },
  impact: {
    alignSelf: "flex-end",
    position: "absolute",
    top: -7,
    right: 6,
    borderRadius: 4
  }
});
export default styles;

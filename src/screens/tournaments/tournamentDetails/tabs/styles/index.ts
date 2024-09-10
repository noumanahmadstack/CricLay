import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../../theme/colors';
import {
  largeFont,
  mediumFont,
  smallFont,
  xsmallFont,
} from '../../../../../theme/responsiveFonts';
import { regularText, semiBoldText } from '../../../../../theme/fonts';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: 'row',
  },
  justifyContent: {
    justifyContent: 'center',
  },
  alignContent: {
    alignContent: 'center',
  },
  contentSpaceBetween: {
    justifyContent: "space-between"
  },
  contentSpaceRound: {
    justifyContent: "space-around"
  },
  imageSize: {
    borderWidth: 1,
    borderRadius: 100,
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  modalInnerImamge: {
    borderWidth: 1,
    borderRadius: 100,
    height: 60,
    width: 60
  },
  mainWrapper: {
    flex: 1,
    margin: 15
  },
  renderView: {
    margin: 10,
    alignContent: 'center',
  },
  teamTitle: {
    textAlign: 'center',
    width: 100,
    color: colors.themeBlue,
    fontSize: smallFont,
    ...semiBoldText,
    marginTop: 5,
  },

  title: {
    textAlign: 'center',
    width: 120,
    color: colors.viewAllGray,
    fontSize: xsmallFont,
    ...regularText
  },
  boundries: {
    textAlign: 'center',
    width: 120,
    color: colors.darkRed,
    fontSize: mediumFont,
    ...semiBoldText
  },
  playertitle: {
    textAlign: 'center',
    width: 120,
    color: colors.viewAllGray,
    fontSize: xsmallFont,
    ...semiBoldText
  },
  safeAriaView: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: '#f4f4f4',
  },
  modalHeader: {
    height: '20%',
    flexDirection: 'row',
    backgroundColor: '#001B42',
  },
  crossIcon: {
    flex: 0.35,
    marginLeft: 10,
  },
  headerTitle: {
    flex: 0.5,
    color: colors.white,
    fontSize: largeFont,
    ...semiBoldText,
  },
  topPlayerTitle: {
    // flex: 0.5,
    padding:10,
    color: colors.black,
    fontSize: largeFont,
    ...semiBoldText,
  },
  modalFLatlistWrapper: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  modalInnerTouchableOpacity: {
    margin: 3,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  contentWrapper: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  modalTeamTitle: {
    fontSize: largeFont,
    ...semiBoldText,
    color: colors.black,
  },
  teamDesc: {
    color: '#9C9C9C',
    textAlign: 'center',
  },
  modalInnerView: {
    flexDirection: 'row',
    padding: 20,
  },
  groupListWrapper: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  row2: {
    flexDirection: 'row',
    flex: 1,
  },
  pointTableView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#cccccc'
  },
  pointTableHeader: {
    fontSize: mediumFont,
    ...semiBoldText,
    flexDirection: 'row',
    width: '50%',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  deteailpointTableHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  headerText: {
    fontSize: mediumFont,
    ...semiBoldText,
    width: '12%',
    textAlign: 'center',
    color: colors.black,
  },
  netHeaderText: {
    fontSize: mediumFont,
    ...semiBoldText,
    width: '35%',
    textAlign: 'center',
    color: colors.black,
  },
  detialHeaderText: {
    fontSize: 12,
    ...semiBoldText,
    width: '15%',
    textAlign: 'center',
    color: colors.black,
  },
  SimpleText: {
    fontSize: mediumFont,
    ...semiBoldText,
    textAlign: 'center',
    color: colors.black,
  },
  groupTitle: {
    fontSize: mediumFont,
    ...semiBoldText,
    color: colors.black,
  },
  TeamView: {
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'center',
  },
  itemAlign: {
    alignItems: 'center',
    width: 100,
  },
  groupTeamImage: {
    borderRadius: 100,
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  groupTeamName: {
    fontSize: xsmallFont,
    ...semiBoldText,
    alignSelf: 'center',
    marginLeft: 5,
    width: 100,
    color: colors.black,
  },
  smallIconView: {
    backgroundColor: '#E4E4E4',
    marginRight: 10,
    borderRadius: 2,
    borderWidth: 0.2,
    justifyContent: 'center',
    padding: 5,
    borderColor: '#C7C6C6',
  }
  ,
  addTeamTouchableOpacity: {
    backgroundColor: '#E4E4E4',
    justifyContent: 'center',
    height: 40,
    width: 100,
    borderRadius: 10,
  },
  matchSafeView: {
    flex: 1,
    justifyContent: 'center',
  },
  groupTeam: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: '#f4f4f4',
  },
  emptyView: {
    flex: 1,
  },
  noText: {
    fontSize: largeFont,
    ...semiBoldText,
    color: colors.disableFont,
    textAlign: 'center',
  },
  noDetailText: {
    fontSize: xsmallFont,
    ...regularText,
    color: colors.disableFont,
    textAlign: 'center',
    marginTop: 4,
  },
  scoreText: {
    color: colors.blackOpacity,
    fontSize: smallFont,
    ...regularText,
    width: '12%',
    textAlign: 'center',
  },
  netScoreText: {
    color: colors.blackOpacity,
    fontSize: smallFont,
    ...regularText,
    width: '35%',
    textAlign: 'center',
  },
  cardTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  btnContainer: {
    marginVertical: 20,
  },
  btnStyle: {
    minWidth: width / 2.3,
  },
  btnsRowContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  trashView: {
    backgroundColor: '#C7C6C6',
    height: 25,
    width: 25,
    borderRadius: 100,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'grey',
    marginVertical: 20,
  },
  imageNameView: {
    width: '50%',
    flexDirection: 'row'
  },
  teamNameImage: {
    width: '35%',
    flexDirection: 'row'
  },
  addButtonText: {
    textAlign: 'center',
    color: colors.black
  },
  groupEmptyTeam: {
    textAlign: 'center',
    color: colors.disableFont,
    marginBottom: 5,
  },
  groupInternalView: {
    alignItems: 'center',
    marginVertical: 20
  },
  trashIcon: {
    alignSelf: 'center',
    marginLeft: 20
  },
  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    marginHorizontal:10
  },
  dp: {
    alignSelf:"center",
    height: 56,
    width: 56,
    marginRight: 5
},
topPlayerView:{
  flexDirection:"row",
  backgroundColor:colors.white,
  justifyContent:"space-around",
  padding:10
},
overViewtitle: {
  textAlign: 'center',
  width: 120,
  color: colors.viewAllGray,
  fontSize: xsmallFont,
  ...semiBoldText
},
teamIcon: {
  height: 60,
  width: 60,
  borderRadius: 50,
  alignSelf:"center",
  marginTop:10
},
winningIcon:{
alignSelf:"flex-end",
position:"absolute",
right:20,
top:28
}
});
export default styles;

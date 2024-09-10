import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../theme/fonts';
import {
  mediumFont,
  smallFont,
  xsmallFont,
} from '../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer:{ 
    flexDirection: "row" 
  },
  dpContainer: {
    flex: 0.4,
    borderBottomRightRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dp: {
    width: 80,
    height: 80,
    borderRadius: 200,
    alignSelf: 'center',
  },
  name: {
    color: colors.fontBlack,
    fontSize: mediumFont,
    marginTop: 5,
    ...semiBoldText,
  },
  email: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...semiBoldText,
  },
  itemsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  drawerPoweredByTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
  },
  powerBy: {
    fontSize: xsmallFont,
    color: colors.fontBlack,
    ...regularText,
  },
  logoutTxt: {
    fontSize: smallFont,
    color: colors.fontBlack,
    marginLeft: 5,
    ...semiBoldText,
  },
  eritheiaTitle: {
    fontSize: xsmallFont,
    color: colors.fbBlue,
    ...regularText,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  editView:{backgroundColor:"#c5c5c5",height:24,width:24,justifyContent:"center",alignItems:"center",borderRadius:100,position:"absolute",right:0}
});
export default styles;

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
  nameContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    alignItems: 'center',
    minHeight: 50,
  },
  teamMatchesContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamTitle: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
    marginLeft: 5,
  },
  teamScore: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
  },
  teamOver: {
    color: colors.disableFont,
    marginRight: 5,
    fontSize: xsmallFont,
    ...regularText,
  },
  overInnings: {
    height: 30,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    marginRight: 13,
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
  matchesName: {
    color: colors.fontBlack,
    fontSize: smallFont,
    ...semiBoldText,
  },
});
export default styles;

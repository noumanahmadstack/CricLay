import {StyleSheet} from 'react-native';
import {xsmallFont} from '../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../theme/fonts';
import colors from '../../../theme/colors';
const styles = StyleSheet.create({
  title: {
    fontSize: xsmallFont,
    color: colors.disableFont,
    marginTop: 20,
    textAlign: 'center',
    ...semiBoldText,
  },
  selectedTitle: {
    color: colors.fontBlack,
  },
  ballsRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginHorizontal: 50,
  },
  ballsContainer: {
    minHeight: 60,
    minWidth: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputBackground,
    borderColor: colors.borderColor,
    borderWidth: 1,
    elevation: 2, // Controls the shadow depth
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 0}, // Shadow offset
    shadowOpacity: 0.15, // Shadow opacity
    shadowRadius: 2, // Shadow radius
  },
  selectedBallsContainer: {
    backgroundColor: '#ffeedc',
    borderColor: colors.primaryRed,
  },
  ballImage: {
    height: 50,
    width: 50,
  },
  ballName: {
    fontSize: xsmallFont,
    color: colors.disableFont,
    marginTop: 5,
    textAlign: 'center',
    ...regularText,
  },
  selectedBallName: {
    color: colors.fontBlack,
  },
});
export default styles;

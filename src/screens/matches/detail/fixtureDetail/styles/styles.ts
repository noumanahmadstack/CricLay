import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {marginHorizontal} from '../../../../../theme/margins';
import {mediumFont, smallFont} from '../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../theme/fonts';
const {width} = Dimensions.get('window');

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
    borderRadius: 8,
  },
  infoText: {
    color: colors.black,
    fontSize: mediumFont,
    ...semiBoldText,
    marginHorizontal: marginHorizontal,
  },
  seprator: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    height: '100%',
  },
  listViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  TeamViewContainer: {
    backgroundColor: 'white',
    height: '30%',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: smallFont,
    padding: 15,
    ...semiBoldText,
    color: colors.black,
  },
  desc: {
    color: colors.black,
    flex: 1,
    padding: 15,
    fontSize: smallFont,
    ...regularText,
  },
  btnContainer: {
    marginVertical: 20,
  },
  btnStyle: {
    minWidth: width / 2.3,
  },
  btnsRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
  },
});
export default styles;

import {StyleSheet, Dimensions} from 'react-native';
import {marginHorizontal} from '../../../../theme/margins';
import colors from '../../../../theme/colors';
import {mediumFont} from '../../../../theme/responsiveFonts';
import {regularText} from '../../../../theme/fonts';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginHorizontal: marginHorizontal,
  },
  teamIcon: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: colors.teamIconGray,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.darkShadowColor,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  teamIconTitleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  teamTitle: {
    color: colors.fontBlack,
    textAlign: 'center',
    fontSize: mediumFont,
    ...regularText,
  },
  teamIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
    marginTop: 10,
  },
  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
  },
});
export default styles;

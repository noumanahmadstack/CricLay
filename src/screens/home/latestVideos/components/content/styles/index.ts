import {StyleSheet} from 'react-native';
import colors from '../../../../../../theme/colors';
import {smallFont, xsmallFont} from '../../../../../../theme/responsiveFonts';
import {regularText, semiBoldText} from '../../../../../../theme/fonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    marginVertical: 10,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },
  playIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    position: 'absolute',
    zIndex: 1,
  },
  thumbnail: {
    minHeight: 180,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  bannerContainer: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bannerInnerContainer: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.borderColor,
  },
  timeViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bannerTitle: {
    color: colors.fontBlack,
    fontSize: smallFont,
    flex: 1,
    ...semiBoldText,
  },
  bannerDescText: {
    color: colors.disableFont,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

import { StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
import { semiBoldText } from '../../../../../../theme/fonts';
import { marginHorizontal } from '../../../../../../theme/margins';
import { xsmallFont } from '../../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  message: {
    color: colors.darkRed,
    fontSize: xsmallFont,
    textAlign: 'center',
    ...semiBoldText,
  },
  messageContainer: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: colors.grayLight,
    alignSelf: 'center',
    borderRadius: 7,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  downloadIcon: {
    marginLeft: 15,
    alignSelf: "center"
  },
  youtubeIcon: {
    marginHorizontal: marginHorizontal
  }
});
export default styles;

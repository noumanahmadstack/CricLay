import {StyleSheet, Platform} from 'react-native';
import colors from '../../../theme/colors';
import {regularText} from '../../../theme/fonts';
import {xsmallFont} from '../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: colors.blackOpacity,
    justifyContent: 'center',
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  actionBtn: {
    alignSelf: 'center',
    bottom: Platform.OS == 'android' ? 23 : 53,
    position: 'absolute',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  flatlistStyle: {
    margin: 15,
  },
  itemContainer: {
    alignItems: 'center',
  },
  listHeaderComponentStyle: {
    marginBottom: 15,
  },
  contentContainerStyle: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingBottom: 15,
  },
  listFooterComponentStyle: {
    borderWidth: 1,
    borderEndWidth: 0,
    borderStartWidth: 0,
    borderBottomWidth: 0,
    marginTop: 16,
    borderColor: colors.lightGray,
  },
  title: {
    color: colors.fontBlack,
    fontSize: xsmallFont,
    ...regularText,
  },
});
export default styles;

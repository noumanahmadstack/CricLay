import { StyleSheet } from 'react-native';
import colors from '../../../../../../theme/colors';
import { marginHorizontal } from '../../../../../../theme/margins';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: marginHorizontal,
    marginVertical: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  contentContainerStyle: {
    paddingBottom: marginHorizontal,
  },
  listHeaderComponentStyle: {
    marginBottom: 10,
  },
  ListFooterComponentStyle: {
    marginTop: 10,
    paddingBottom: 10
  },
  dnb: {
    marginBottom: 15
  },
  seprator: {
    marginTop: 0
  }
});
export default styles;
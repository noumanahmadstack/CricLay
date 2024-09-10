import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../../theme/colors';
import {
  mediumFont,
  smallFont,
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
  SimpleText: {
    fontSize: mediumFont,
    ...semiBoldText,
    textAlign: 'center',
    color: colors.black,
  },
  deteailpointTableHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  detialHeaderText: {
    fontSize: 12,
    ...semiBoldText,
    width: '15%',
    textAlign: 'center',
    color: colors.black,
  },
  seperator: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'grey',
    marginVertical: 20,
  },
  safeAriaView: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: '#f4f4f4',
  },
  cardTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  scoreText: {
    color: colors.blackOpacity,
    fontSize: smallFont,
    ...regularText,
    width: '12%',
    textAlign: 'center',
  }
});
export default styles;

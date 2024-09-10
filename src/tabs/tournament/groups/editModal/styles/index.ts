import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import { smallFont } from '../../../../../theme/responsiveFonts';
import { boldText, regularText } from '../../../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackOpacity,
    justifyContent: 'center',
  },
  internalContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 15
  },
  touchableArea: {
    flex: 1,
  },
  btnContainer: {
    marginVertical: 30,
  },

  title:{
    marginVertical:8,
    color: colors.black,
    fontSize: smallFont,
    ...boldText,
    
  },
  btnTitle:{
     textAlign: 'center',
      color: colors.black,
      fontSize: smallFont,
      ...regularText
     },
  heading:{
    fontWeight: 'bold',
     padding: 10
    },
    contentWrapper:{
      flex: 1,
      padding:12
    },
    buttonWrapper:{
      height: 30,
      marginRight:4,
      justifyContent: 'center',
      width: 100,
      elevation:4,
      shadowOpacity:0.2,
      borderRadius: 5,
    },
    header:{
       flexDirection: "row"
     },
     inputFields: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.borderColor,
      borderRadius: 5,
    },
    grdBtnContainer: {
      marginVertical: 20,
    }
});
export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../../../theme/colors';
import {regularText, semiBoldText} from '../../../../../theme/fonts';
import {marginHorizontal} from '../../../../../theme/margins';
import {smallFont} from '../../../../../theme/responsiveFonts';
const styles = StyleSheet.create({
  inputFields: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
  },
  containerStyle: {
    marginHorizontal: marginHorizontal,
  },
  dpContainer: {
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyDp: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCnic: {
  margin:15,
    // height: 80,
    // width: 80,
    // borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoTitle: {
    color: colors.disableFont,
    marginTop: 5,
    fontSize: smallFont,
    ...semiBoldText,
  },
  addCnicTitle: {
    color: colors.black,
    marginTop: 5,
    marginLeft:10,
    fontSize: smallFont,
    ...regularText,
  },
  chooseFile:{
    marginVertical:10,
    backgroundColor:colors.grayLight,
    height:40,
    borderRadius:8,
    padding:10
  },
  cnicContainer: {
    height:220,
    width:420
      },
});
export default styles;

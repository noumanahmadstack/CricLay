import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../../theme/colors';
import {
    largeFont,
    mediumFont,
    smallFont,
    xsmallFont,
} from '../../../../../theme/responsiveFonts';
import { regularText, semiBoldText } from '../../../../../theme/fonts';
import { marginHorizontal } from '../../../../../theme/margins';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    View: {
        flex: 1,
        marginHorizontal: marginHorizontal,
        marginTop: 10,
        justifyContent: "space-between"
    },
    inputFields: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 5,
    },

});
export default styles;

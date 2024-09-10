import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../theme/colors';
import { smallFont, xsmallFont } from '../../../theme/responsiveFonts';
import { regularText, semiBoldText } from '../../../theme/fonts';
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    statView: {
        borderRadius: 8,
        height: 100,
        minWidth: width / 3.5,
        margin: 5,
        backgroundColor: colors.white,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    stat: {
        textAlign: 'center',
        width: 100,
        color: colors.themeBlue,
        fontSize: smallFont,
        marginTop: 5,
        ...semiBoldText
    },
    title: {
        textAlign: 'center',
        color: colors.viewAllGray,
        fontSize: xsmallFont,
        ...regularText
    },
});
export default styles;
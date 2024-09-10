import { StyleSheet } from "react-native";
import colors from "../../../../../theme/colors";
import { regularText, semiBoldText } from "../../../../../theme/fonts";
import { marginHorizontal } from "../../../../../theme/margins";
import { smallFont, xsmallFont, xssmallFont } from "../../../../../theme/responsiveFonts";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: marginHorizontal,
        borderRadius: 4,
        elevation: 2, // Controls the shadow depth
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow offset
        shadowOpacity: 0.15, // Shadow opacity
        shadowRadius: 2, // Shadow radius
    },
    internalContainer: {
        flex: 1
    },
    rankIcon: {
        position: 'absolute',
        right: 0
    },
    dpContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dp: {
        height: 36,
        width: 36,
        marginRight: 5
    },
    count: {
        color: colors.themeBlue,
        fontSize: xsmallFont,
        marginHorizontal,
        ...semiBoldText
    },
    name: {
        color: colors.fontBlack,
        fontSize: smallFont,
        ...semiBoldText
    },
    title: {
        color: colors.fontBlack,
        fontSize: xsmallFont,
        flex: 1,
        textAlign: 'center',
        ...semiBoldText
    },
    teamName: {
        color: colors.barOrange,
        fontSize: xssmallFont,
        ...regularText
    },
    detail: {
        color: colors.disableFont,
        fontSize: xsmallFont,
        textAlign: 'center',
        ...regularText
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    }
})
export default styles
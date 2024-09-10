import { StyleSheet } from "react-native";
import colors from "../../../../../../../theme/colors";
import { semiBoldText } from "../../../../../../../theme/fonts";
import { marginHorizontal } from "../../../../../../../theme/margins";
import { smallFont, xsmallFont } from "../../../../../../../theme/responsiveFonts";
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 430,
    },
    internalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    linearSvg: {
        position: 'absolute',
        zIndex: -1,
    },
    pitch: {
        position: 'absolute',
        height: 45,
        width: 20,
        borderRadius: 3,
        backgroundColor: colors.pitchColor,
        zIndex: 100
    },
    scoreColorContainer: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: colors.themeBlue,
        marginHorizontal: marginHorizontal,
        borderRadius: 30,
        justifyContent: 'space-around'
    },
    scoreTitle: {
        color: colors.fontBlack,
        fontSize: xsmallFont,
        ...semiBoldText
    },
    scoreContainer: { height: 34, width: 34, borderRadius: 100, alignItems: 'center', justifyContent: 'center' },
    count: {
        color: colors.white,
        fontSize: xsmallFont,
        textAlign: 'center',
        marginTop: 5,
        ...semiBoldText
    },
    title: {
        color: colors.fontBlack,
        fontSize: smallFont,
        marginHorizontal,
        textAlign: 'center',
        ...semiBoldText 
    }
})
export default styles
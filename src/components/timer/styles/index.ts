import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { semiBoldText } from "../../../theme/fonts";
import { xssmallFont } from "../../../theme/responsiveFonts";
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.themeBlue,
        paddingHorizontal: 10,
        paddingVertical: 7,
        shadowColor: colors.darkShadowColor,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 5,
        alignSelf: 'center'
    },
    amateurContainer: {
        backgroundColor: colors.darkAmateurPink
    },
    time: {
        color: colors.white,
        fontSize: xssmallFont,
        ...semiBoldText
    }
})
export default styles
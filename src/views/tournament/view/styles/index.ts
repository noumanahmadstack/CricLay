import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import { regularText, semiBoldText } from "../../../../theme/fonts";
import { largeFont, smallFont } from "../../../../theme/responsiveFonts";
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        height: 120,
    },
    backGroundImage: {
        flex: 1,
        borderRadius: 10,
    },
    innerContent: {
        flex: 1,
        justifyContent: 'center',
        opacity: 0.8,
        backgroundColor: colors.themeBlue,
        borderRadius: 10,
    },
    amateurColor: {
        backgroundColor: colors.darkAmateurPink
    },
    tournamentTitle: {
        fontSize: largeFont,
        ...semiBoldText,
        color: colors.white,
        paddingHorizontal: 10,
    },
    location: {
        fontSize: smallFont,
        ...regularText,
        color: colors.white,
        paddingHorizontal: 10,
    },
})
export default styles
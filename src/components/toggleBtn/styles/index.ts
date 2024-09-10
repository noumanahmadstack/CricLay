import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { semiBoldText } from "../../../theme/fonts";
import { xsmallFont } from "../../../theme/responsiveFonts";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: colors.fontBlack,
        fontSize: xsmallFont,
        ...semiBoldText
    }
})
export default styles
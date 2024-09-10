import { StyleSheet } from "react-native";
import colors from "../../../../../../../theme/colors";
import { regularText, semiBoldText } from "../../../../../../../theme/fonts";
import { xsmallFont } from "../../../../../../../theme/responsiveFonts";
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: colors.blackOpacity
    },
    safeareaContainer: {
        backgroundColor: colors.whiteContainer,
        flex: 1
    },
    svgContainer: {
        flex: 1
    },
    floatingOptContainer: {
        flexDirection: 'row'
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        top: 10,
    },
    blankArea: {
        flex: 0.8
    },
    batterName: {
        color: colors.fontBlack,
        fontSize: xsmallFont,
        marginLeft: 10,
        ...semiBoldText
    },
    skipTitle: {
        color: colors.fontBlack,
        fontSize: xsmallFont,
        marginLeft: 10,
        ...regularText
    },
    runs: {
        color: colors.green,
        fontSize: xsmallFont,
        ...regularText
    }
})
export default styles
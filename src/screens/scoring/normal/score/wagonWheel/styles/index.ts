import { StyleSheet } from "react-native";
import colors from "../../../../../../theme/colors";
import { regularText, semiBoldText } from "../../../../../../theme/fonts";
import { xsmallFont } from "../../../../../../theme/responsiveFonts";
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: colors.blackOpacity
    },
    safeareaContainer: {
        // backgroundColor: colors.whiteContainer,
        alignItems: 'center',
        // flex:1
        height: '50%'
    },
    floatingOptContainer: {
        // flex:1,
        position: 'absolute',
        left: 10,
        top: 10,
        flexDirection: 'row'
    },
    batterName:{
        color: colors.fontBlack,
        fontSize: xsmallFont,
        marginLeft: 10,
        ...semiBoldText
    },
    runs: {
        color: colors.green,
        fontSize: xsmallFont,
        ...regularText  
    }
})
export default styles
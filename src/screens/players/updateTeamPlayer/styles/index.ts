import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import { marginHorizontal } from "../../../../theme/margins";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    keyboardWrapper: {
        flex: 1
    },
    fields: {
        marginHorizontal
    },
    dropDown: {
        margin: marginHorizontal,
    },
    textInputContainerStyle: { backgroundColor: colors.white }

})
export default styles
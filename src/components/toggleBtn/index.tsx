import { FC } from "react";
import { Switch, View, SwitchProps, Text, StyleProp, ViewStyle, TextStyle, ActivityIndicator } from "react-native";
import styles from "./styles";
import colors from "../../theme/colors";
const ToggleBtn: FC<SwitchProps & { title: string, containerStyle?: StyleProp<ViewStyle>, titleStyle?: StyleProp<TextStyle>, isLoading?: boolean }> = (props) => {
    const { title, containerStyle, isLoading, ...switchProps } = props
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.title}>{title}</Text>
            {isLoading ?
                <ActivityIndicator color={props.trackColor?.true || colors.themeBlue} />
                :
                <Switch
                    {...switchProps}
                />
            }
        </View>
    )
}
export default ToggleBtn
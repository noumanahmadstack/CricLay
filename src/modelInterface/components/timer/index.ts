import { StyleProp, ViewStyle } from "react-native";
import { InningObjPros } from "../../scoring";

export interface TimerProps {
    style?: StyleProp<ViewStyle>;
    isStarted?: boolean;
    duration: InningObjPros['duration'];
    isAmateur?: boolean;
}
import { StyleProp, ViewStyle } from "react-native";

export interface FilterBtnProps {
    style?: StyleProp<ViewStyle>;
    data: object[];
    title?: string;
    multiSelect?: boolean;
    onConfirm?(date?: Date | any): void;
    returnString?: boolean;
}
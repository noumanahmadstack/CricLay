import { StyleProp, ViewStyle } from 'react-native';
export interface StyleProps {
  style?: StyleProp<ViewStyle>;
}
export interface BtnProps {
  onPress?: (e?: any) => void;
}
export interface IsFocusedProps {
  focused?: boolean;
}

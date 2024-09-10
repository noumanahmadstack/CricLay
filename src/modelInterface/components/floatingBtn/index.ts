import { StyleProp, ViewStyle } from 'react-native';
export interface FloatingBtnProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  btnType?: 'ticker';
  isAmateur?:boolean
}

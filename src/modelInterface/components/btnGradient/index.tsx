import {StyleProp, TextStyle, ViewStyle} from 'react-native';
export interface GradientBtnProps {
  disabled?: boolean;
  loading?: boolean;
  loaderColor?: string;
  title?: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  btnStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  isAmateur?:boolean
}

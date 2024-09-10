import {ReactNode} from 'react';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';
export interface InputProps {
  containerStyle?: StyleProp<ViewStyle>;
  titleContainer?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  LeftChild?: ReactNode;
  RightChild?: ReactNode;
  value?: string;
  maxLength?: number;
  error?: string | null;
  forget?: boolean;
  isPassword?: boolean;
  onPressforgetPassword?: () => void;
  onPress?: () => void;
  isCountryPickerEnable?: boolean;
}
export interface FormInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

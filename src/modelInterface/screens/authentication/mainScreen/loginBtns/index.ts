import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
export interface LoginBtnProps {
  containerStyle?: StyleProp<ViewStyle>;
  LeftChild?: ReactNode;
  title?: string;
  titleColor?: string;
  titleStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
}

import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
export interface DropDownProps {
  containerStyle?: StyleProp<ViewStyle>;
  titleContainer?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  title?: string;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  LeftChild?: ReactNode;
  RightChild?: ReactNode;
  value?: string;
  isCalendar?: boolean;
  error?: string | null;
  maximumDate?: Date;
  isDropDown?: boolean;
  mode?: any;
  multiSelect?: boolean;
  LeftChildForDropDownInput?: ReactNode;
  data?: Array<{key?: string; value?: string; LeftChild?: ReactNode}>;
  onConfirm?(date?: Date | any): void;
  onPress?: () => void;
  isCountryPickerEnable?: boolean;
  returnString?: boolean;
  isCustomInputForDropDown?: boolean;
  isAmateur?:boolean
}

import { StyleProp, ViewStyle } from "react-native";

type Route = {
  LeftChild?: React.ComponentType<{ style?: StyleProp<ViewStyle> | null; focused?: boolean }>;
  key: string;
  title?: string;
};
export interface TabBarProps {
  layout?:
  {
    width: number;
    height: number;
  };
  selectedIndex?: number;
  onPress?: (index: number) => void;
  position: any;
  leftCount?: string | number;
  navigationState?: {
    index: number;
    routes: Route[];
  };
  isAmateur?:boolean
}
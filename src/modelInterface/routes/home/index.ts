import {NativeStackScreenProps} from '@react-navigation/native-stack';
type YourNavigatorParamListType = {
  Home: {
    isRegisteration?: boolean;
  };
};
export type HomeRoutesProps = NativeStackScreenProps<
  YourNavigatorParamListType,
  'Home'
>;

import {RFValue} from 'react-native-responsive-fontsize';
import {Platform} from 'react-native';
export const xssmallFont = RFValue(Platform.OS == 'ios' ? 8 : 10);
export const xsmallFont = RFValue(Platform.OS == 'ios' ? 10 : 12);
export const smallFont = RFValue(Platform.OS == 'ios' ? 12 : 14);
export const mediumFont = RFValue(Platform.OS == 'ios' ? 14 : 16);
export const largeFont = RFValue(Platform.OS == 'ios' ? 16 : 18);
export const xLargeFont = RFValue(20);

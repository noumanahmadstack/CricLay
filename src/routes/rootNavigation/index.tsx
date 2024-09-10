import * as React from 'react';
import {StackActions, NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}
export function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
export function reset(routes: {name: string; params?: any}[], index: number) {
  navigationRef.current?.reset({
    index,
    routes,
  });
}
export function goBack() {
  navigationRef.current?.goBack();
}

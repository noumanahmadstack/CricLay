import {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {
  BlueStatusBarProps,
  ScreenContainerProps,
} from '../../../modelInterface/screens/componentChild';
import colors from '../../../theme/colors';
import styles from './styles';
export const SimpleScreenContainer: FC<
  ScreenContainerProps & BlueStatusBarProps
> = ({children, isBlue}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={isBlue ? colors.themeBlue : colors.white}
        barStyle={isBlue ? 'light-content' : 'dark-content'}
      />
      {children}
    </SafeAreaView>
  );
};
export const SimpleScreenContainerBlueStatusBar: FC<ScreenContainerProps> = ({
  children,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.themeBlue}
        barStyle={'light-content'}
      />
      {children}
    </SafeAreaView>
  );
};
export const SimpleBlueScreenContainer: FC<ScreenContainerProps> = ({
  children,
}) => {
  return (
    <SafeAreaView style={styles.containerBlue}>
      <StatusBar
        backgroundColor={colors.themeBlue}
        barStyle={'light-content'}
      />
      {children}
    </SafeAreaView>
  );
};

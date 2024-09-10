import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {AuthenticationLogo} from '../../../assets/svg';
import {ScreenContainerProps} from '../../../modelInterface/screens/componentChild';
import colors from '../../../theme/colors';
import styles from './styles';
const ScreenContainer: React.FC<ScreenContainerProps> = ({children}) => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.themeBlue}
          barStyle="light-content"
        />
        <AuthenticationLogo style={styles.logo} />
        <SafeAreaView style={styles.childContainer}>{children}</SafeAreaView>
      </View>
    </>
  );
};

export default ScreenContainer;

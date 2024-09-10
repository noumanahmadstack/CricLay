import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Footer = ({onPressCancel, onPressOk}) => {
  return (
    <View style={styles.footerContainer}>
      <Text onPress={onPressCancel} style={styles.footerTexts}>
        CANCEL
      </Text>
      <Text onPress={onPressOk} style={styles.footerTexts}>
        OK
      </Text>
    </View>
  );
};
export default Footer;

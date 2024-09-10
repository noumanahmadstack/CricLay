import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LoginBtnProps} from '../../../modelInterface/screens/authentication/mainScreen/loginBtns';
import styles from './styles';
const LoginBtn: React.FC<LoginBtnProps> = ({
  containerStyle,
  LeftChild,
  title,
  titleStyle,
  titleColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {LeftChild && <View style={styles.leftChild}>{LeftChild}</View>}
      {title && (
        <Text style={[styles.title, {color: titleColor}, titleStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default LoginBtn;

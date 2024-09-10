import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import GradientColor from '../../../theme/gradientColors';
import {GradientBtnProps} from '../../../modelInterface/components/btnGradient';
import styles from './styles';
import colors from '../../../theme/colors';
const GradientBtn: React.FC<GradientBtnProps> = ({
  disabled,
  loading,
  loaderColor,
  title,
  textStyle,
  containerStyle,
  btnStyle,
  isAmateur,
  onPress,
}) => {
 
  
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, containerStyle]}
      disabled={disabled || loading}>
      <LinearGradient
        colors={
          disabled
            ? GradientColor.grayGradient
            : (isAmateur ? GradientColor.amateurGradient:GradientColor.authenticationBtn)
        }
        style={[styles.gradient, btnStyle]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        {loading ? (
          <ActivityIndicator
            color={loaderColor || colors.white}
            animating={true}
          />
        ) : (
          <Text style={[styles.buttonTitle, textStyle]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default GradientBtn;

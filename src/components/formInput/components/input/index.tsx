import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TextInputProps,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {CountriesPickProps} from '../../../../modelInterface/components/countriesPicker';
import {InputProps} from '../../../../modelInterface/components/formInput';
import colors from '../../../../theme/colors';
import CountriesPicker from '../../../countriesPicker';
import styles from './styles';
const Input: React.FC<
  InputProps & TextInputProps & CountriesPickProps
> = props => {
  const [isSecure, setIsSecure] = useState(true);
  const {
    containerStyle,
    titleContainer,
    titleStyle,
    title,
    textInputContainerStyle,
    LeftChild,
    RightChild,
    value,
    maxLength,
    error,
    forget,
    isPassword,
    onPressforgetPassword,
    isCountryPickerEnable,
    country,
    onConfirm,
    onPress,
    ...textInputProps
  } = props;
  const onHandlePress = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <View style={containerStyle}>
      <View style={titleContainer}>
        {title && (
          <Text
            style={[
              titleStyle,
              !!value && value !== '' && styles.focusedTitleStyle,
            ]}>
            {title}
          </Text>
        )}
        <TouchableOpacity
          disabled={!onPress}
          onPress={onHandlePress}
          style={[styles.inputContainer, textInputContainerStyle]}>
          {LeftChild && LeftChild}
          {isCountryPickerEnable && (
            <CountriesPicker onConfirm={onConfirm} country={country} />
          )}
          <TextInput
            secureTextEntry={(isPassword || forget) && isSecure ? true : false}
            {...textInputProps}
            value={value}
            autoCapitalize={
              textInputProps.autoCapitalize
                ? textInputProps.autoCapitalize
                : 'none'
            }
          />
          {RightChild && RightChild}
          {(isPassword || forget) && (
            <Entypo
              onPress={() => setIsSecure(prevState => !prevState)}
              size={20}
              color={colors.disableFont}
              name={isSecure ? 'eye-with-line' : 'eye'}
            />
          )}
        </TouchableOpacity>
        {value && maxLength && (
          <Text style={styles.maxText}>
            {value?.length}/{maxLength}
          </Text>
        )}
        {error && <Text style={styles.errorText}>{error}</Text>}
        {forget && (
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={onPressforgetPassword}>
            <Text style={styles.forgotPasswordTitle}>Forgot password?</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

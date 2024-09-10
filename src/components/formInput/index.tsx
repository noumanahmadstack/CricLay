import React from 'react';
import {TextInputProps} from 'react-native';
import {CountriesPickProps} from '../../modelInterface/components/countriesPicker';
import {
  FormInputProps,
  InputProps,
} from '../../modelInterface/components/formInput';
import colors from '../../theme/colors';
import Input from './components/input';
import styles from './styles';
const FormInput: React.FC<
  TextInputProps & FormInputProps & InputProps & CountriesPickProps
> = props => {
  const {containerStyle, textInputContainerStyle, ...textInputProps} = props;
  return (
    <Input
      placeholderTextColor={colors.placeholderColor}
      style={styles.inputStyle}
      containerStyle={[styles.inputContainer, containerStyle]}
      titleStyle={styles.titleStyle}
      textInputContainerStyle={[
        styles.textInputContainerStyle,
        textInputContainerStyle,
      ]}
      {...textInputProps}
    />
  );
};
export default FormInput;

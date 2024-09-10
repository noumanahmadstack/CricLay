import React, {FC} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from './styles';
const CountrySearchInput: FC<TextInputProps> = ({
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.style}
    />
  );
};
export default CountrySearchInput;

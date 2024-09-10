import React from 'react';
import {TextInputProps} from 'react-native';
import {DropDownProps} from './modalInterface';
import colors from '../../theme/colors';
import Field from './field';
import styles from './styles';
const DropDown: React.FC<TextInputProps & DropDownProps> = props => {
  const {containerStyle, ...textInputProps} = props;
  return (
    <Field
      placeholderTextColor={colors.placeholderColor}
      style={styles.inputStyle}
      containerStyle={[styles.inputContainer, containerStyle]}
      titleStyle={styles.titleStyle}
      textInputContainerStyle={[
        styles.textInputContainerStyle,
        !!textInputProps.value && styles.filledtextInputColor,
      ]}
      {...textInputProps}
    />
  );
};
export default DropDown;

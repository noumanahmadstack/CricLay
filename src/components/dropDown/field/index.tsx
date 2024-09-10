import React, {useState, ReactNode, useCallback} from 'react';
import {View, Text, TextInputProps, TouchableOpacity} from 'react-native';
import moment from 'moment-timezone';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {DropDownProps} from '../modalInterface';
import colors from '../../../theme/colors';
import styles from './styles';
import ModalView from '../modal';
const Field: React.FC<DropDownProps & TextInputProps> = props => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [localValue, setLocalValue] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<
    Array<{key?: string; value?: string; LeftChild?: any}>
  >([]);
  const [localValueArray, setLocalValueArray] = useState<
    Array<{key?: string; value?: string; LeftChild?: any}>
  >([]);
  const {
    containerStyle,
    titleContainer,
    titleStyle,
    title,
    textInputContainerStyle,
    LeftChild,
    RightChild,
    maxLength,
    error,
    maximumDate,
    isCalendar,
    mode,
    isDropDown,
    multiSelect,
    data,
    onConfirm,
    onPress,
    LeftChildForDropDownInput,
    isCustomInputForDropDown,
    returnString,
    isAmateur,
    ...textInputProps

  } = props;
  const timezone = moment.tz.guess();
  const format = mode === 'datetime' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
  const handleOnConfirm = ({
    date,
    localValue,
  }: {
    date?: Date;
    localValue?: string;
  }) => {
    if (isCalendar) {
      const localDateTime = moment.tz(date, timezone).format(format);
      if (onConfirm) {
        onConfirm(date);
      }
      setLocalValue(localDateTime);
    } else if (isDropDown) {
      if (multiSelect) {
        setLocalValueArray(selectedItem);
        if (onConfirm) {
          onConfirm(selectedItem[0]);
        }
      } else if (!!localValue && localValue !== '') {
        setLocalValue(localValue);
        if (onConfirm) {
          onConfirm(returnString ? localValue : selectedItem[0]);
        }
      }
    }
    setIsOpen(false);
  };
  const transformText = () => {
    if (!multiSelect) {
      return (
        <Text
          style={[
            textInputProps.style,
            !textInputProps.value &&
              !localValue && {color: colors.placeholderColor},
          ]}>
          {!textInputProps.value && !localValue
            ? textInputProps.placeholder
            : localValue
            ? localValue
            : textInputProps.value}
        </Text>
      );
    } else {
      if (!textInputProps.value && localValueArray.length == 0) {
        return (
          <Text
            style={[textInputProps.style, {color: colors.placeholderColor}]}>
            {textInputProps.placeholder}
          </Text>
        );
      } else {
        return (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flex: 1,
              marginVertical: 5,
            }}>
            {localValueArray.map(item => {
              const {LeftChild, key, value} = item;
              return (
                <View key={key} style={styles.internalContainer}>
                  {LeftChild && <LeftChild color={colors.white} />}
                  <Text style={styles.title}>{value}</Text>
                </View>
              );
            })}
          </View>
        );
      }
    }
  };
  const isSelected = useCallback(
    (item: {key?: string; value?: string; LeftChild?: ReactNode}) => {
      if (selectedItem.length > 0) {
        return selectedItem?.some(
          e => JSON.stringify(e) === JSON.stringify(item),
        );
      }
    },
    [selectedItem],
  );
  const onSelect = (e: {
    key?: string;
    value?: string;
    LeftChild?: ReactNode;
  }) => {
    if (
      selectedItem?.some(object => JSON.stringify(object) === JSON.stringify(e))
    ) {
      setSelectedItem(
        selectedItem?.filter(
          data => JSON.stringify(data) !== JSON.stringify(e),
        ),
      );
    }
    if (multiSelect) {
      setSelectedItem(prev => [...prev, e]);
    } else {
      setSelectedItem([e]);
    }
  };
  const handleOnPress = () => {
    if (onPress) {
      onPress();
    } else {
      setIsOpen(true);
    }
  };
  return (
    <View style={containerStyle}>
      {isDropDown && (
        <ModalView
          visible={isOpen}
          headerTitle={title}
          data={data}
          onRequestClose={() => setIsOpen(false)}
          onSelect={onSelect}
          isSelected={isSelected}
          placeholder={textInputProps.placeholder}
          onConfirm={handleOnConfirm}
          isCustomInputForDropDown={isCustomInputForDropDown}
          LeftChildForDropDownInput={LeftChildForDropDownInput}
          isAmateur={isAmateur}
        />
      )}
      {isCalendar && (
        <DateTimePickerModal
          isVisible={isOpen}
          mode={mode ? mode : 'date'}
          maximumDate={maximumDate}
          onConfirm={date => handleOnConfirm({date})}
          onCancel={() => setIsOpen(false)}
        />
      )}
      <View style={titleContainer}>
        {title && <Text style={titleStyle}>{title}</Text>}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleOnPress}
          style={[styles.inputContainer, textInputContainerStyle]}>
          {LeftChild && LeftChild}
          {transformText()}
          {RightChild && RightChild}
        </TouchableOpacity>
        {textInputProps.value && maxLength && (
          <Text style={styles.maxText}>
            {textInputProps.value?.length}/{maxLength}
          </Text>
        )}
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

export default Field;

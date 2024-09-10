import {useState} from 'react';
import {Modal, SafeAreaView, FlatList, View} from 'react-native';
import Content from './components/content';
import Seprator from './components/seprator';
import styles from './styles';
import Header from './components/header';
import Footer from './components/footer';
import FormInput from '../../formInput';
const ModalView = props => {
  const {
    data,
    visible,
    onRequestClose,
    onSelect,
    onConfirm,
    isSelected,
    headerTitle,
    placeholder,
    isCustomInputForDropDown,
    LeftChildForDropDownInput,
  } = props;
  const [localValue, setLocalValue] = useState('');
  const handleOnRequestClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleoOnSelect = prop => {
    if (onSelect) {
      setLocalValue(prop?.value);
      onSelect(prop);
    }
  };
  const handleOK = () => {
    if (onConfirm) {
      onConfirm({localValue});
    }
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      onRequestClose={onRequestClose}
      visible={visible}>
      <View style={styles.container}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.internalContainer}>
            <Header
              headerTitle={headerTitle}
              isCustomInputForDropDown={isCustomInputForDropDown}
              placeholder={placeholder}
              value={localValue}
              onChangeText={setLocalValue}
              LeftChildForDropDownInput={LeftChildForDropDownInput}
            />
            <FlatList
              data={data}
              keyExtractor={({key}) => key}
              ListHeaderComponent={
                isCustomInputForDropDown && (
                  <FormInput
                    containerStyle={styles.formInputContainerStyle}
                    LeftChild={LeftChildForDropDownInput}
                    value={localValue}
                    onChangeText={setLocalValue}
                    {...props}
                  />
                )
              }
              contentContainerStyle={styles.contentContainerStyle}
              ItemSeparatorComponent={Seprator}
              renderItem={({item}) => (
                <Content
                  isSelected={isSelected}
                  onPress={handleoOnSelect}
                  item={item}
                />
              )}
            />
            <Footer onPressCancel={handleOnRequestClose} onPressOk={handleOK} />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default ModalView;

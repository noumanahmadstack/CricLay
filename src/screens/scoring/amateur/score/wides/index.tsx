import {FC} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalHeader from '../../../../../components/modalHeader';
import {BallObjLocalProps} from '../../../../../modelInterface/scoring';
import {WideOptionsModalProps} from '../../../../../modelInterface/screens/scoring';
import styles from './styles';
const WideCases: FC<WideOptionsModalProps> = ({
  isVisible,
  onConfirm,
  onRequestClose,
}) => {
  const extraData: BallObjLocalProps[] = [
    {
      key: '0',
      value: 'Wide',
      runs: 1,
      ballType: 'extra',
      extrasType: 'wide',
    },
    {
      key: '1',
      value: 'Wd+1',
      runs: 2,
      ballType: 'extra',
      extrasType: 'wide',
    },
    {
      key: '2',
      value: 'Wd+2',
      runs: 3,
      ballType: 'extra',
      extrasType: 'wide',
    },
    {
      key: '3',
      value: 'Wd+3',
      runs: 4,
      ballType: 'extra',
      extrasType: 'wide',
    },
    {
      key: '4',
      value: 'Wd+4',
      runs: 5,
      ballType: 'extra',
      extrasType: 'wide',
    },
    {
      key: '6',
      value: 'Wd+5',
      runs: 6,
      ballType: 'extra',
      extrasType: 'wide',
    },
    {
      key: '6',
      value: 'Wd+6',
      runs: 7,
      ballType: 'extra',
      extrasType: 'wide',
    },
  ];
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = (data: BallObjLocalProps) => {
    if (onConfirm) {
      onConfirm(data);
    }
    onRequestClose();
  };
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onHandleClose}>
      <View style={styles.container}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.internalContainer}>
            <ModalHeader title={'Wide cases'} onCancel={onHandleClose} isAmateur={true}/>
            <FlatList
              data={extraData}
              keyExtractor={({key}) => key}
              numColumns={3}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => handleOnConfirm(item)}
                  style={styles.itemContainer}>
                  <Text style={styles.title}>{item.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default WideCases;

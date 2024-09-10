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
const ByeCases: FC<WideOptionsModalProps> = ({
  isVisible,
  onConfirm,
  onRequestClose,
}) => {
  const byeData: BallObjLocalProps[] = [
    {
      key: '0',
      value: '1 B',
      runs: 1,
      ballType: 'bye',
      extrasType: 'safe',
    },
    {
      key: '1',
      value: '2 B',
      runs: 2,
      ballType: 'bye',
      extrasType: 'safe',
    },
    {
      key: '2',
      value: '3 B',
      runs: 3,
      ballType: 'bye',
      extrasType: 'safe',
    },
    {
      key: '3',
      value: '4 B',
      runs: 4,
      ballType: 'bye',
      extrasType: 'safe',
    },
    {
      key: '4',
      value: '5 B',
      runs: 5,
      ballType: 'bye',
      extrasType: 'safe',
    },
    {
      key: '6',
      value: '6 B',
      runs: 6,
      ballType: 'bye',
      extrasType: 'safe',
    },
    {
      key: '6',
      value: '7 B',
      runs: 7,
      ballType: 'bye',
      extrasType: 'safe',
    },
  ];
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = (props: BallObjLocalProps) => {
    if (onConfirm) {
      onConfirm(props);
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
            <ModalHeader title={'Bye cases'} onCancel={onHandleClose} />
            <FlatList
              data={byeData}
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
export default ByeCases;

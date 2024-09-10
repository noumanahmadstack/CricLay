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
const NormalScoreCases: FC<WideOptionsModalProps> = ({
  isVisible,
  onConfirm,
  onRequestClose,
}) => {
  const normalData: BallObjLocalProps[] = [
    {
      key: '0',
      value: '4',
      runs: 4,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '1',
      value: '5',
      runs: 5,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '2',
      value: '6',
      runs: 6,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '3',
      value: '7',
      runs: 7,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '4',
      value: '8',
      runs: 8,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '5',
      value: '9',
      runs: 9,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '6',
      value: '10',
      runs: 10,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '7',
      value: '11',
      runs: 11,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '8',
      value: '12',
      runs: 12,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '9',
      value: '13',
      runs: 13,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
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
            <ModalHeader title={'Normal Runs cases'} onCancel={onHandleClose} />
            <FlatList
              data={normalData}
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
export default NormalScoreCases;

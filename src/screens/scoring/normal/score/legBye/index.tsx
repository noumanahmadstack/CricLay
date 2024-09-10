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
const LegByeCases: FC<WideOptionsModalProps> = ({
  isVisible,
  onConfirm,
  onRequestClose,
}) => {
  const legByeData: BallObjLocalProps[] = [
    {
      key: '0',
      value: '1 LB',
      runs: 1,
      ballType: 'leg_bye',
      extrasType: 'safe',
    },
    {
      key: '1',
      value: '2 LB',
      runs: 2,
      ballType: 'leg_bye',
      extrasType: 'safe',
    },
    {
      key: '2',
      value: '3 LB',
      runs: 3,
      ballType: 'leg_bye',
      extrasType: 'safe',
    },
    {
      key: '3',
      value: '4 LB',
      runs: 4,
      ballType: 'leg_bye',
      extrasType: 'safe',
    },
    {
      key: '4',
      value: '5 LB',
      runs: 5,
      ballType: 'leg_bye',
      extrasType: 'safe',
    },
    {
      key: '6',
      value: '6 LB',
      runs: 6,
      ballType: 'leg_bye',
      extrasType: 'safe',
    },
    {
      key: '6',
      value: '7 LB',
      runs: 7,
      ballType: 'leg_bye',
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
            <ModalHeader title={'Leg-Bye cases'} onCancel={onHandleClose} />
            <FlatList
              data={legByeData}
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
export default LegByeCases;

import { FC } from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalHeader from '../../../../../components/modalHeader';
import { DropDownObjProps } from '../../../../../modelInterface/commonProps';
import { GoldenOptionsModalProps } from '../../../../../modelInterface/screens/scoring';
import styles from './styles';
const GoldenBallCases: FC<GoldenOptionsModalProps> = ({
  isVisible,
  onConfirm,
  onRequestClose,
  goldenBallNumber
}) => {
  const goldenBallData: DropDownObjProps[] = [
    {
      key: '0',
      value: '1',
    },
    {
      key: '1',
      value: '2',
    },
    {
      key: '2',
      value: '3',
    },
    {
      key: '3',
      value: '4',
    },
    {
      key: '4',
      value: '5',
    },
  ];
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = (data: DropDownObjProps) => {
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
            <ModalHeader isAmateur={true} title={'Last Over Golden Ball'} onCancel={onHandleClose} />
            <FlatList
              data={goldenBallData}
              keyExtractor={({ key }) => key}
              numColumns={3}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={({ item }) => (
                <TouchableOpacity
                  disabled={!!goldenBallNumber}
                  onPress={() => handleOnConfirm(item)}
                  style={[styles.itemContainer, item.value == goldenBallNumber && styles.itemContainerAmateur]}>
                  <Text style={[styles.title, item.value == goldenBallNumber && styles.titleAmateur]}>{item.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default GoldenBallCases;

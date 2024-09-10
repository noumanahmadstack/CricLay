import { FC } from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalHeader from '../../../../../../components/modalHeader';
import { DropDownObjProps } from '../../../../../../modelInterface/commonProps';
import { DrawOptionsModalProps } from '../../../../../../modelInterface/screens/scoring';
import styles from './styles';
const DrawOptionsModal: FC<DrawOptionsModalProps> = ({
  isVisible,
  onConfirm,
  onRequestClose,
}) => {
  const drawData = [
    {
      key: 'bad_weather',
      value: 'Bad Weather'
    },
    {
      key: 'due_to_rain',
      value: 'Due to Rain'
    },
    {
      key: 'poor_wicket_and_outfield_conditions',
      value: 'Poor wicket'
    },
    {
      key: 'scores_tied',
      value: 'Scores Tied'
    },
    {
      key: 'forfeit_inning',
      value: 'Forfeit Inning'
    },
    {
      key: 'medical_emergency',
      value: 'Medical Emergency'
    }
  ];
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = (props: DropDownObjProps) => {
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
            <ModalHeader isAmateur={true} title={'Draw cases'} onCancel={onHandleClose} />
            <FlatList
              data={drawData}
              keyExtractor={({ key }) => key}
              numColumns={3}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={({ item }) => (
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
export default DrawOptionsModal;

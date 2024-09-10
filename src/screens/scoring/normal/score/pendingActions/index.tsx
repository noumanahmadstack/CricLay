import {FC, useState} from 'react';
import {Modal, SafeAreaView, Text, View} from 'react-native';
import GradientBtn from '../../../../../components/btns/gradientBtn';
import ModalHeader from '../../../../../components/modalHeader';
import {PendingActionsModalProps} from '../../../../../modelInterface/screens/scoring';
import {hitBall} from '../../../../../redux/scoring/normal/score/action';
import styles from './styles';
const PendingActions: FC<PendingActionsModalProps> = ({
  isVisible,
  onRequestClose,
  pendingActionsCount,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = async () => {
    setIsLoading(true);
    await hitBall();
    setIsLoading(false);
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
            <ModalHeader title={'Pending Actions'} onCancel={onHandleClose} />
            <View style={styles.secondaryContainer}>
              <Text style={styles.pendingActionTitle}>
                Pending Actions To Save
              </Text>
              <Text style={styles.pendingActionText}>
                {pendingActionsCount}
              </Text>
              <GradientBtn
                loading={isLoading}
                onPress={handleOnConfirm}
                disabled={pendingActionsCount == 0}
                title="Sync"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default PendingActions;

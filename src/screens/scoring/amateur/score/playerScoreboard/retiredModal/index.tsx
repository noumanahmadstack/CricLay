import { FC } from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalHeader from '../../../../../../components/modalHeader';
import { BallObjLocalProps } from '../../../../../../modelInterface/scoring';
import { RetiredOutModalProps } from '../../../../../../modelInterface/screens/scoring';
import styles from './styles';
const RetiredModal: FC<RetiredOutModalProps> = ({
  isVisible,
  onConfirm,
  onRequestClose,
  playerObj,
  inningId,
}) => {
  const options = [
    {
      key: '0',
      value: 'OK',
      onPress: () => handleOnConfirm()
    },
    {
      key: '1',
      value: 'Cancel',
      runs: 2,
      onPress: () => onRequestClose()
    }
  ];

  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = () => {
    if (onConfirm && inningId) {
      const ball: BallObjLocalProps = {
        key: '0',
        value: 'OK',
        runs: 0,
        ballType: 'wicket',
        extrasType: 'safe',
        boundaryType: 'safe',
        wicketAttributes: {
          inningId,
          wicketType: 'retired', // [bowled catch catch_behind catch_bowled stumped run_out man_kaded lbw hit_wicket retired_hurt absent_hurt retired hit_the_ball_twice obstructing_the_field timed_out]
          playerOutId: playerObj?.batsmanId,
        },
      }
      onConfirm(ball);
    }
    onRequestClose();
  };
  return (
    <Modal
      visible={isVisible}
      onDismiss={onRequestClose} // insure to reset the parent states whenever the modal is closed
      transparent={true}
      animationType="fade"
      onRequestClose={onHandleClose}>
      <View style={styles.container}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.internalContainer}>
            <ModalHeader isAmateur={true} title={`Do you want to retire ${playerObj?.name}?`} onCancel={onHandleClose} />
            <Image
              style={styles.dp}
              source={require('../../../../../../assets/images/user/user.png')}
            />
            <Text
              style={[
                styles.playerName,
                !!playerObj?.name && styles.playerNameColor,
              ]}>
              {playerObj?.name}
            </Text>
            <FlatList
              data={options}
              keyExtractor={({ key }) => key}
              numColumns={3}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={item.onPress}
                  style={[styles.itemContainer, item.key == '0' && styles.redItemContainer]}>
                  <Text style={[styles.title, item.key == '0' && styles.whiteTitle]}>{item.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default RetiredModal;
import {FC} from 'react';
import {Modal, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ModalHeader from '../../../../../../components/modalHeader';
import {SelectPlayerDataProps} from '../../../../../../modelInterface/scoring';
import {MatchPlayerProps} from '../../../../../../modelInterface/screens/scoring';
import {RootState} from '../../../../../../redux/store/store';
import PlayersListView from '../../../../../../views/players/playersListView';
import styles from './styles';
const MatchPlayers: FC<MatchPlayerProps> = ({
  isBatsman,
  isVisible,
  headerTitle,
  onConfirm,
  onRequestClose,
}) => {
  const {isLoading, battingPlaying, bowlerPlaying} = useSelector(
    (state: RootState) => state.teamPlayerReducer,
  );
  const data = isBatsman ? battingPlaying : bowlerPlaying;
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = (data: SelectPlayerDataProps) => {
    onRequestClose();
    if (onConfirm) {
      onConfirm(data);
    }
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
            <ModalHeader title={headerTitle} onCancel={onHandleClose} />
            {data.length > 0 ? (
              <PlayersListView data={data} onSelectPlayer={handleOnConfirm} />
            ) : (
              !isLoading && (
                <View style={styles.noPlayerContainer}>
                  <Text style={styles.noPlayerTxt}>No player to show!</Text>
                </View>
              )
            )}
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default MatchPlayers;

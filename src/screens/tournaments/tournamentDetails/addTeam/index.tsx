import {FC, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import GradientBtn from '../../../../components/btns/gradientBtn';
import {AddTeamsProps} from '../../../../modelInterface/screens/teams';
import {RootState} from '../../../../redux/store/store';
import {
  setIsShowAddTeamModal,
  setTournamentId,
} from '../../../../redux/teams/addTeam/reducer';
import {navigate} from '../../../../routes/rootNavigation';
import AddTeam from '../../../teams/selectTeams/addTeam';
import styles from './styles';
const SelectTeam: FC<AddTeamsProps> = ({isVisible, tournament_id, onClose,tournamentType}) => {
  const dispatch = useDispatch();
  const isShowAddTeamModal = useSelector(
    (state: RootState) => state.addTeamReducer.isShowAddTeamModal,
  );
  const {isLoading} = useSelector((state: RootState) => state.addTeamReducer);
  const onHandleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    dispatch(setTournamentId(tournament_id));
  }, [tournament_id, dispatch]);
  return (
    <>
      <AddTeam
        tournament_id={tournament_id}
        isVisible={isShowAddTeamModal}
        onClose={() => dispatch(setIsShowAddTeamModal(false))}
        tournamentType={tournamentType}
      />
      <Modal
        transparent={true}
        onRequestClose={onHandleClose}
        visible={isVisible}
        animationType="fade">
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            onPress={onHandleClose}
            style={styles.touchableArea}
          />
          <View style={[styles.internalContainer]}>
            <Text style={styles.ModalText}>
              Do you want to Create new Team?
            </Text>
            <GradientBtn
              title="Create "
              containerStyle={styles.btnContainer}
              loading={isLoading}
              isAmateur={tournamentType === "amateur"}
              onPress={() => {
                onHandleClose(), dispatch(setIsShowAddTeamModal(true));
              }}
            />
            <Text
              style={[
                styles.ModalText,
                {color: '#9C9C9C', marginVertical: 10},
              ]}>
              ---OR---
            </Text>
            <Text style={styles.ModalText}>
              Do you want to select a team from existing club or a team?
            </Text>
            <GradientBtn
              title="Select"
              containerStyle={[styles.btnContainer]}
              isAmateur={tournamentType === "amateur"}
              loading={isLoading}
              onPress={() => {
                onHandleClose(), navigate('myTeams', {tournament_id});
              }}
            />
          </View>
          <TouchableOpacity
            onPress={onHandleClose}
            style={styles.touchableArea}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};
export default SelectTeam;

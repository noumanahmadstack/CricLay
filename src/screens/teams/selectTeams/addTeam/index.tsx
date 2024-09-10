import {FC, useEffect} from 'react';
import {View, Modal, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {AddTeamIcon, LocationIcon} from '../../../../assets/svg';
import FormInput from '../../../../components/formInput';
import GradientBtn from '../../../../components/btns/gradientBtn';
import {AddTeamsProps} from '../../../../modelInterface/screens/teams';
import {RootState} from '../../../../redux/store/store';
import {
  onSubmit,
  disableSubmit,
  onSubmits,
} from '../../../../redux/teams/addTeam/action';
import {
  setName,
  setLocation,
  setTournamentId,
} from '../../../../redux/teams/addTeam/reducer';
import styles from './styles';
import ModalHeader from '../../../../components/modalHeader';
const AddTeam: FC<AddTeamsProps> = ({isVisible, onClose, tournament_id,tournamentType}) => {
  const dispatch = useDispatch();
  const {name, location, isLoading} = useSelector(
    (state: RootState) => state.addTeamReducer,
  );
  const onHandleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (tournament_id) {
      dispatch(setTournamentId(tournament_id));
    }
  }, [tournament_id, dispatch]);
  return (
    <Modal
      transparent={true}
      onRequestClose={onHandleClose}
      visible={isVisible}
      animationType="fade">
      <SafeAreaView style={styles.container}>
        <View style={styles.primaryContainer}>
          <ModalHeader title="Add Team" onCancel={onHandleClose} isAmateur={tournamentType === "amateur"} />
          <FormInput
            title="Team Name"
            LeftChild={<AddTeamIcon />}
            placeholder="Enter your team name"
            containerStyle={styles.inputContainer}
            onChangeText={e => {
              dispatch(setName(e));
            }}
            value={name}
          />
          <FormInput
            title="Add Location"
            LeftChild={<LocationIcon />}
            placeholder="Enter your team location"
            containerStyle={styles.inputContainer}
            onChangeText={e => {
              dispatch(setLocation(e));
            }}
            value={location}
          />
          <GradientBtn
            title="Add Team"
            containerStyle={styles.btnContainer}
            loading={isLoading}
            disabled={disableSubmit()}
            isAmateur={tournamentType === "amateur"}
            onPress={() => {
              tournament_id ? onSubmits({tournament_id}) : onSubmit();
            }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};
export default AddTeam;

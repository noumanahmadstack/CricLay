import {FC} from 'react';
import {Text, Modal, View, SafeAreaView, TouchableOpacity} from 'react-native';
import GradientBtn from '../../../../components/btns/gradientBtn';
import ErrorText from '../../../../components/errorText';
import TeamsIconTitleContainer from '../../../../components/teamsIconTitleContainer';
import {TossProps} from '../../../../modelInterface/screens/match';
import Header from './header';
import styles from './styles';
import { store } from '../../../../redux/store/store';
const Toss: FC<TossProps> = ({
  isVisible,
  onRequestClose,
  onSubmit,
  teamAName,
  teamBName,
  isSelectedTeamA,
  isSelectedTeamB,
  onPressTeamA,
  onPressTeamB,
  error,
  isLoading,
  onPressDecision,
  toss_decision,
  team1Logo,
  team2Logo,
}) => {
  const {match_type } =
  store.getState().startMatchReducer;
  const tossDecisions = [
    {
      name: 'Bat',
      toss_decision: 'bating',
    },
    {
      name: 'Bowl',
      toss_decision: 'bowling',
    },
  ];
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const onHandleSubmit = () => {
    if (onSubmit) {
      onSubmit();
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
            <Header onPressCross={onHandleClose} />
            <TeamsIconTitleContainer
              name1={teamAName}
              name2={teamBName}
              isSelected1={isSelectedTeamA}
              isSelected2={isSelectedTeamB}
              onPress1={onPressTeamA}
              onPress2={onPressTeamB}
              team1Logo={team1Logo}
              team2Logo={team2Logo}
            />
            <ErrorText
              textStyle={styles.errorText}
              error={
                error === 'Please select toss winning team'
                  ? 'Please select toss winning team'
                  : null
              }
            />
            <Text style={styles.decideTxt}>Decide to?</Text>
            <View style={styles.teamsContainer}>
              {tossDecisions.map(item => (
                <TouchableOpacity
                  key={item.toss_decision}
                  onPress={() => onPressDecision(item.toss_decision)}
                  activeOpacity={0.7}
                  style={[
                    styles.decideOptContainer,
                    item.toss_decision == toss_decision &&
                      styles.selectedDecideOptContainer,
                  ]}>
                  <Text style={styles.decideOptTxt}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <ErrorText
              textStyle={styles.errorText}
              error={
                error === 'Please select batting team'
                  ? 'Please select batting team'
                  : null
              }
            />
            <View style={styles.startScoringBtnContainer}>
              <GradientBtn
                title="Start Scoring"
                onPress={onHandleSubmit}
                loading={isLoading}
                isAmateur={match_type == 'amateur'?true:false}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default Toss;

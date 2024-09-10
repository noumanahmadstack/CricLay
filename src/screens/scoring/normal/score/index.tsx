import { FC, useState, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TeamsIconTitleContainer from '../../../../components/teamsIconTitleContainer';
import InputScoreOptions from './inputScoreOptions';
import OverScores from './overScores';
import PlayerScoreboard from './playerScoreboard';
import { undoBowls } from '../../../../redux/scoring/normal/score/reducer';
import SelectPlayers from './selectPlayers';
import { navigate } from '../../../../routes/rootNavigation';
import Roep from './roep';
import { handleScore, onHandleEndInning, hitBall, onHandleSelectStriker } from '../../../../redux/scoring/normal/score/action';
import styles from './styles';
import WideCases from './wides';
import NoBallCases from './noBalls';
import { ScoringScreenProps } from '../../../../modelInterface/scoring';
import LegByeCases from './legBye';
import ByeCases from './bye';
import colors from '../../../../theme/colors';
import { ActionIcon, Out } from '../../../../assets/svg';
import SettingBar from './settingBar';
import PendingActions from './pendingActions';
import NormalScoreCases from './normalScores';
import { toastMessage } from '../../../../components/toastMessages';
import VirtualizedScrollView from '../../../../components/virtualizedScrollView';
const Score: FC<ScoringScreenProps> = ({
  currentInning,
  lineupData,
  teamOne,
  teamtwo,
  isLoading,
  syncBalls,
  shareableId,
  battingPlaying,
  bowlerPlaying,
  currentPartnership,
  wicketsDown,
  totalExtras,
  currentOver,
  currentRuns,
  currentRunRate,
  isShowInningEnd,
  remainingScore,
  remainingBalls,
  refreshing,
  onRefresh,
  otherTeamsRuns,
  otherTeamsWickets,
  otherBattingTeamId,
  rrr,
  matchStatus,
  overlayUrl,
}) => {
  const dispatch = useDispatch();
  const isReachableNetwork = useRef<boolean | null>(true);
  const [isVisibleWideModal, setIsVisibleWideModal] = useState<boolean>(false);
  const [isVisiblePendingActionModal, setIsVisiblePendingActionModal] = useState<boolean>(false);
  const [isVisibleNoBallModal, setIsVisibleNoBallModal] = useState<boolean>(false);
  const [isVisibleLegByeModal, setIsVisibleLegByeModal] = useState<boolean>(false);
  const [isVisibleNormalRunsModal, setIsVisibleNormalRunsModal] = useState<boolean>(false);
  const [isVisibleByeModal, setIsVisibleByeModal] = useState<boolean>(false);
  const {
    balls,
    ballsPerOver,
    inningNumber,
    matchId,
    batingTeamId,
    bowlingTeamId,
    id: inningId,
    totalOvers
  } = currentInning || {};
  const { batterData, bowlingData } = lineupData || {};
  const batsmanLength = 2;
  const onHandleEndInningPress = () => {
    if (syncBalls == 0) {
      onHandleEndInning({});
    } else {
      setIsVisiblePendingActionModal(true);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | number = 0;
    const unsubscribe = NetInfo.addEventListener(state => {
      isReachableNetwork.current = state.isInternetReachable;
      if (!isLoading) {
        if (state.isConnected && state.isInternetReachable && syncBalls > 0) {
          intervalId = setInterval(hitBall, 1000);
        } else {
          clearInterval(intervalId);
        }
      }
    });
    return () => {
      clearInterval(intervalId);
      unsubscribe();
    };
  }, [balls, isReachableNetwork.current, isLoading, syncBalls]);
    
  return (
    <VirtualizedScrollView
      onRefresh={onRefresh}
      refreshing={refreshing}
    >
      <PendingActions
        isVisible={isVisiblePendingActionModal}
        onRequestClose={() => setIsVisiblePendingActionModal(false)}
        pendingActionsCount={syncBalls}
      />
      <WideCases
        isVisible={isVisibleWideModal}
        onRequestClose={() => setIsVisibleWideModal(false)}
        onConfirm={handleScore}
      />
      <NoBallCases
        isVisible={isVisibleNoBallModal}
        onRequestClose={() => setIsVisibleNoBallModal(false)}
        onConfirm={handleScore}
      />
      <LegByeCases
        isVisible={isVisibleLegByeModal}
        onRequestClose={() => setIsVisibleLegByeModal(false)}
        onConfirm={handleScore}
      />
      <ByeCases
        isVisible={isVisibleByeModal}
        onRequestClose={() => setIsVisibleByeModal(false)}
        onConfirm={handleScore}
      />
      <NormalScoreCases
        isVisible={isVisibleNormalRunsModal}
        onRequestClose={() => setIsVisibleNormalRunsModal(false)}
        onConfirm={handleScore}
      />
      <TeamsIconTitleContainer
        name1={
          teamOne.name +
          '\n' +
          (batingTeamId == teamOne.id
            ? currentRuns + '/' + wicketsDown
            : teamOne.id == otherBattingTeamId
              ? otherTeamsRuns + '/' + otherTeamsWickets
              : 'Yet to bat')
        }
        name2={
          teamtwo.name +
          '\n' +
          (batingTeamId == teamtwo.id
            ? currentRuns + '/' + wicketsDown
            : teamtwo.id == otherBattingTeamId
              ? otherTeamsRuns + '/' + otherTeamsWickets
              : 'Yet to bat')
        }
        onPress1={() => navigate('TeamProfile', { logoUrl: teamOne?.logoUrl, id: teamOne?.id, name: teamOne?.name, shareableId })}
        onPress2={() => navigate('TeamProfile', { logoUrl: teamtwo?.logoUrl, id: teamtwo?.id, name: teamtwo?.name, shareableId })}
        isSelected1={batingTeamId == teamOne.id}
        isSelected2={batingTeamId == teamtwo.id}
        team1Logo={teamOne.logoUrl}
        team2Logo={teamtwo.logoUrl}
      />
      <SettingBar
        shareableId={shareableId}
        syncBalls={syncBalls}
        onPressActions={() => setIsVisiblePendingActionModal(true)}
        overlayUrl={overlayUrl}
      />
      <Roep
        overs={currentOver}
        extras={totalExtras}
        partnership={currentPartnership}
        crr={currentRunRate}
        rrr={rrr}
      />
      {inningNumber == 2 && (
        <Text style={styles.remainingScoreOvers}>
          {remainingScore} score needed on {remainingBalls} ball
          {remainingBalls == 1 ? 's' : ''}
        </Text>
      )}
      <PlayerScoreboard
        onSelectStriker={({ batsmanId }) => onHandleSelectStriker({ inningId, batterData, batsmanId })}
        strikerId={lineupData?.strikerId}
        batsmanData={batterData}
        bowlerData={bowlingData}
        currentInning={currentInning}
        lineupData={lineupData}
        matchStatus={matchStatus}
        onEditBatter={({batsmanId}) =>
          navigate('TeamPlayers', {
            isBatsman: true,
            isEdit: true,
            selectedBatsmanId: batsmanId,
            team_id: batingTeamId,
            match_id: matchId,
          })
        }
        onEditBowler={() =>
          navigate('TeamPlayers', {
            isBatsman: false,
            team_id: bowlingTeamId,
            match_id: matchId,
          })
        }
      />
      <OverScores totalOvers={totalOvers} ballsPerOver={ballsPerOver} scoreInOver={balls} />
      {isShowInningEnd ? (
        <TouchableOpacity
          onPress={onHandleEndInningPress}
          style={[styles.btnContainer, styles.actionBtnColor]}>
          <Text style={styles.actionBtnTitle}>End Inning</Text>
        </TouchableOpacity>
      ) : batterData?.length < batsmanLength || !bowlingData?.bowlerId ? (
        <SelectPlayers
          batsmanLength={batterData?.length}
          isSelectedBowler={!bowlingData?.bowlerId}
          onPressBatsman={() =>
            navigate('TeamPlayers', {
              isBatsman: true,
              team_id: batingTeamId,
              match_id: matchId,
            })
          }
          onPressBowler={() =>
            navigate('TeamPlayers', {
              isBatsman: false,
              team_id: bowlingTeamId,
              match_id: matchId,
            })
          }
        />
      ) : (
        <InputScoreOptions
          onPressScore={handleScore}
          onRequestOpenWideCases={() => setIsVisibleWideModal(true)}
          onRequestOpenNoBallCases={() => setIsVisibleNoBallModal(true)}
          onRequestOpenByeCases={() => setIsVisibleByeModal(true)}
          onRequestOpenLegByeCases={() => setIsVisibleLegByeModal(true)}
          onRequestOpenNormalRunsCases={() => setIsVisibleNormalRunsModal(true)}
          striker={batterData?.find((item) => item.batsmanId == lineupData.strikerId)}
        />
      )}
      <View style={styles.bottomBtnContainer}>
        {balls.length > 0 && (
          <TouchableOpacity
            onPress={() => dispatch(undoBowls({ battingPlaying, bowlerPlaying }))}
            style={[styles.btnContainer, styles.undoBtnColor]}>
            <FontAwesome name="undo" color={colors.white} size={20} />
            <Text style={styles.actionBtnTitle}>Undo</Text>
          </TouchableOpacity>
        )}
        {!isShowInningEnd &&
          !(batterData?.length < batsmanLength || !bowlingData?.bowlerId) && (
            <TouchableOpacity
              onPress={() => (lineupData.strikerId == '' || lineupData.strikerId == null) ? toastMessage('Please select striker player') : navigate('OutOptions')}
              style={styles.btnContainer}>
              <Out />
              <Text style={styles.actionBtnTitle}>Out</Text>
            </TouchableOpacity>
          )}
        <TouchableOpacity
          onPress={() => navigate('ScoringAction')}
          style={[styles.btnContainer, styles.actionBtnColor]}>
          <ActionIcon />
          <Text style={styles.actionBtnTitle}>Action</Text>
        </TouchableOpacity>
      </View>
    </VirtualizedScrollView>
  );
};
export default Score;
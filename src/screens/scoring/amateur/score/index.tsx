import { FC, useState, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {debounce} from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons'
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TeamsIconTitleContainer from '../../../../components/teamsIconTitleContainer';
import InputScoreOptions from './inputScoreOptions';
import OverScores from './overScores';
import PlayerScoreboard from './playerScoreboard';
import { setIsVisibleGoldenBallModal, undoBowls } from '../../../../redux/scoring/amateur/score/reducer';
import SelectPlayers from './selectPlayers';
import { navigate } from '../../../../routes/rootNavigation';
import Roep from './roep';
import { handleScore, onHandleEndInning, hitBall, onHandleSelectStriker, setGoldenBallNumberAction } from '../../../../redux/scoring/amateur/score/action';
import styles from './styles';
import WideCases from './wides';
import NoBallCases from './noBalls';
import { BatterStatsAttributesProps, ScoringScreenProps } from '../../../../modelInterface/scoring';
import LegByeCases from './legBye';
import ByeCases from './bye';
import colors from '../../../../theme/colors';
import { ActionIcon, Out } from '../../../../assets/svg';
import SettingBar from './settingBar';
import PendingActions from './pendingActions';
import NormalScoreCases from './normalScores';
import { toastMessage } from '../../../../components/toastMessages';
import VirtualizedScrollView from '../../../../components/virtualizedScrollView';
import GoldenBallCases from './goldenBall';
import PointsToggleModal from './actions/pointsToggle';
import RetiredModal from './playerScoreboard/retiredModal';
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
  includeExtras,
  isAmateur,
  isVisibleGoldenBallModal
}) => {
  const dispatch = useDispatch();
  const isReachableNetwork = useRef<boolean | null>(true);
  const [isVisibleWideModal, setIsVisibleWideModal] = useState<boolean>(false);
  const [isVisiblePendingActionModal, setIsVisiblePendingActionModal] = useState<boolean>(false);
  const [selectedPlayer, setSelectedPlayer] = useState<BatterStatsAttributesProps>({ batsmanId: '' })
  const isVisibleRetiredModal: boolean = selectedPlayer.batsmanId !== ""
  const [isVisibleNoBallModal, setIsVisibleNoBallModal] = useState<boolean>(false);
  const [isVisibleLegByeModal, setIsVisibleLegByeModal] = useState<boolean>(false);
  const [isVisibleNormalRunsModal, setIsVisibleNormalRunsModal] = useState<boolean>(false);
  const [isVisibleByeModal, setIsVisibleByeModal] = useState<boolean>(false);
  const [isVisiblePointsModal, setIsVisiblePointsModal] = useState<boolean>(false);
  const {
    balls,
    ballsPerOver,
    inningNumber,
    matchId,
    batingTeamId,
    bowlingTeamId,
    id: inningId,
    totalOvers,
    goldenBallNumber,
    totalWickets,
  } = currentInning || {};
  const { batterData, bowlingData } = lineupData || {};
  const loneSurvivor: boolean = totalWickets - 1 == wicketsDown
  const batsmanLength: number = loneSurvivor ? 1 : 2;
  const onHandleEndInningPress = () => {
    if (syncBalls == 0) {
      if (inningNumber == 2) {
        setIsVisiblePointsModal(true)
      } else {
        onHandleEndInning({});
      }
    } else {
      setIsVisiblePendingActionModal(true);
    }
  };
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout | number = 0;
    const unsubscribe = NetInfo.addEventListener(state => {
      isReachableNetwork.current = state.isInternetReachable;
      if (!isLoading && state.isConnected && state.isInternetReachable && syncBalls > 0) {
        intervalId = setInterval(hitBall, 1000);
      } else {
        clearInterval(intervalId);
      }
    });
    return () => {
      clearInterval(intervalId);
      unsubscribe();
    };
  }, [balls, isReachableNetwork.current, isLoading, syncBalls]);
  const onHandleFifty = debounce((data: BatterStatsAttributesProps) => {
    setSelectedPlayer(data)
  })
  return (
    <VirtualizedScrollView
      onRefresh={onRefresh}
      refreshing={refreshing}
    >
      <RetiredModal
        isVisible={isVisibleRetiredModal}
        onRequestClose={() => setSelectedPlayer({ batsmanId: '' })}
        playerObj={selectedPlayer}
        inningId={currentInning?.id}
        onConfirm={(ball) => handleScore({ ball, currentInning, lineupData, loneSurvivor })}
      />
      <PointsToggleModal
        isVisible={isVisiblePointsModal}
        onRequestClose={() => setIsVisiblePointsModal(false)}
        onConfirm={(kitPoint) => onHandleEndInning({ action: true, kitPoint })}
        teamOne={teamOne}
        teamTwo={teamtwo}
      />
      <PendingActions
        isVisible={isVisiblePendingActionModal}
        onRequestClose={() => setIsVisiblePendingActionModal(false)}
        pendingActionsCount={syncBalls}
      />
      <WideCases
        isVisible={isVisibleWideModal}
        onRequestClose={() => setIsVisibleWideModal(false)}
        onConfirm={(ball) => handleScore({ ball, currentInning, lineupData, loneSurvivor })}
      />
      <NoBallCases
        isVisible={isVisibleNoBallModal}
        onRequestClose={() => setIsVisibleNoBallModal(false)}
        onConfirm={(ball) => handleScore({ ball, currentInning, lineupData, loneSurvivor })}
      />
      <LegByeCases
        isVisible={isVisibleLegByeModal}
        onRequestClose={() => setIsVisibleLegByeModal(false)}
        onConfirm={(ball) => handleScore({ ball, currentInning, lineupData, loneSurvivor })}
      />
      <ByeCases
        isVisible={isVisibleByeModal}
        onRequestClose={() => setIsVisibleByeModal(false)}
        onConfirm={(ball) => handleScore({ ball, currentInning, lineupData, loneSurvivor })}
      />
      <NormalScoreCases
        isVisible={isVisibleNormalRunsModal}
        onRequestClose={() => setIsVisibleNormalRunsModal(false)}
        onConfirm={(ball) => handleScore({ ball, currentInning, lineupData, loneSurvivor })}
      />
      <GoldenBallCases
        isVisible={!!isVisibleGoldenBallModal}
        onRequestClose={() => dispatch(setIsVisibleGoldenBallModal(false))}
        onConfirm={({ value }) => setGoldenBallNumberAction(Number(value))}
        goldenBallNumber={goldenBallNumber}
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
        onSelectStriker={({ batsmanId }) => onHandleSelectStriker({ inningId, batterData, batsmanId, loneSurvivor })}
        strikerId={lineupData?.strikerId}
        batsmanData={batterData}
        bowlerData={bowlingData}
        onFifty={onHandleFifty}
        currentInning={currentInning}
        lineupData={lineupData}
        matchStatus={matchStatus}
        includeExtras={includeExtras}
        loneSurvivor={loneSurvivor}
        onEditBatter={({batsmanId}) =>
          navigate('AmateurTeamPlayers', {
            isBatsman: true,
            isEdit: true,
            selectedBatsmanId: batsmanId,
            team_id: batingTeamId,
            match_id: matchId,
          })
        }
        onEditBowler={() =>
          navigate('AmateurTeamPlayers', {
            isBatsman: false,
            team_id: bowlingTeamId,
            match_id: matchId,
          })
        }
      />
      <OverScores
        scoreInOver={balls}
        ballsPerOver={ballsPerOver}
        totalOvers={totalOvers}
      />
      {isShowInningEnd ? (
        <TouchableOpacity
          onPress={onHandleEndInningPress}
          style={[styles.btnContainer, isAmateur ? styles.amateurUndoBtnColor : styles.actionBtnColor]}>
          <Text style={styles.actionBtnTitle}>End Inning</Text>
        </TouchableOpacity>
      ) : batterData?.length < batsmanLength || !bowlingData?.bowlerId ? (
        <SelectPlayers
          batsmanLength={batterData?.length}
          isSelectedBowler={!bowlingData?.bowlerId}
          onPressBatsman={() =>
            navigate('AmateurTeamPlayers', {
              isBatsman: true,
              team_id: batingTeamId,
              match_id: matchId,
            })
          }
          onPressBowler={() =>
            navigate('AmateurTeamPlayers', {
              isBatsman: false,
              team_id: bowlingTeamId,
              match_id: matchId,
            })
          }
          isAmateur={isAmateur}
        />
      ) : (
        <InputScoreOptions
          onPressScore={(ball) => handleScore({ ball, currentInning, lineupData, loneSurvivor })}
          onRequestOpenWideCases={() => setIsVisibleWideModal(true)}
          onRequestOpenNoBallCases={() => setIsVisibleNoBallModal(true)}
          onRequestOpenByeCases={() => setIsVisibleByeModal(true)}
          onRequestOpenLegByeCases={() => setIsVisibleLegByeModal(true)}
          onRequestOpenNormalRunsCases={() => setIsVisibleNormalRunsModal(true)}
          striker={batterData?.find((item) => item.batsmanId == lineupData.strikerId)}
          loneSurvivor={loneSurvivor}
        />
      )}
      <View style={styles.bottomBtnContainer}>
        {balls.length > 0 && (
          <TouchableOpacity
            onPress={() => dispatch(undoBowls({ battingPlaying, bowlerPlaying }))}
            style={[styles.btnContainer, isAmateur ? styles.amateurUndoBtnColor : styles.undoBtnColor]}>
            <FontAwesome name="undo" color={colors.white} size={20} />
            <Text style={styles.actionBtnTitle}>Undo</Text>
          </TouchableOpacity>
        )}
        {!isShowInningEnd &&
          !(batterData?.length < batsmanLength || !bowlingData?.bowlerId) && (
            <TouchableOpacity
              onPress={() => (lineupData.strikerId == '' || lineupData.strikerId == null) ? toastMessage('Please select striker player') : navigate('OutOptionsAmateur', { loneSurvivor })}
              style={[styles.btnContainer, isAmateur ? styles.amateurOutBtnColor : styles.outBtnColor]}>
              <Out />
              <Text style={styles.actionBtnTitle}>Out</Text>
            </TouchableOpacity>
          )}
        <TouchableOpacity
          onPress={() => dispatch(setIsVisibleGoldenBallModal(true))}
          style={[styles.btnContainer, styles.actionBtnColor]}>
          <Ionicons size={22} name='tennisball-sharp' color={colors.white} />
          <Text style={styles.actionBtnTitle}>Golden Ball</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigate('ScoringActionAmateur')}
        style={[styles.btnContainer, isAmateur ? styles.amateurActionBtnColor : styles.actionBtnColor]}>
        <ActionIcon />
        <Text style={styles.actionBtnTitle}>Action</Text>
      </TouchableOpacity>
    </VirtualizedScrollView>
  );
};
export default Score;
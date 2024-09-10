import { FC, ReactNode, useMemo } from 'react';
import { Text } from 'react-native';
import TeamsIconTitleContainer from '../../../../../components/teamsIconTitleContainer';
import VirtualizedScrollView from '../../../../../components/virtualizedScrollView';
import { LineUpScreenProps } from '../../../../../modelInterface/match';
import PlayerScoreboard from '../../../../scoring/normal/score/playerScoreboard';
import { navigate } from '../../../../../routes/rootNavigation';
import Roep from '../../../../scoring/normal/score/roep';
import StreamingMatchView from '../../../../../views/matches/matchView/streaming'
import styles from './styles';
import Timer from '../../../../../components/timer';
const CurrentLineUp: FC<LineUpScreenProps> = ({
  id,
  teamOneName,
  teamTwoName,
  isSelctedTeamOne,
  isSelectedTeamTwo,
  currentOver,
  totalExtras,
  currentPartnership,
  currentRunRate,
  rrr,
  strikerId,
  batsmanData,
  bowlerData,
  teamOneLogo,
  teamTwoLogo,
  isDetailed,
  isAmateur,
  streamingLinks,
  inningNumber,
  remainingBalls,
  remainingScore,
  inningStatus,
  duration
}) => {
  const RenderScoreMessage = useMemo<ReactNode>(() => inningNumber == 2 && (
    <Text style={styles.remainingScoreOvers}>
      {remainingScore} score needed on {remainingBalls} ball
      {remainingBalls == 1 ? 's' : ''}
    </Text>
  ), [inningNumber])

  const RenderStreamingMatchView = useMemo(() => streamingLinks && streamingLinks[streamingLinks?.length - 1]?.link &&
    <StreamingMatchView
      liveStreamingUrl={streamingLinks[streamingLinks?.length - 1]?.link}
      style={styles.videoContainer}
      onPress={() => navigate('StreamingList', { streamingLinks, id })}
      listing={true}
    />, [streamingLinks])
  const isStarted = useMemo<boolean>(() => (typeof (duration) == 'number' && inningStatus == 'in_progress'), [inningStatus, duration])
  return (
    <VirtualizedScrollView>
      <TeamsIconTitleContainer
        name1={teamOneName || '--'}
        name2={teamTwoName || '--'}
        isSelected1={!!isSelctedTeamOne}
        isSelected2={!!isSelectedTeamTwo}
        team1Logo={teamOneLogo}
        team2Logo={teamTwoLogo}
      />
      {RenderScoreMessage}
      <Timer isAmateur={isAmateur} duration={duration} isStarted={isStarted} />
      <Roep
        overs={currentOver}
        extras={totalExtras}
        partnership={currentPartnership}
        crr={currentRunRate}
        rrr={rrr}
      />
      <PlayerScoreboard
        strikerId={strikerId}
        batsmanData={batsmanData}
        bowlerData={bowlerData}
        isDetailed={isDetailed}
        hideBatterStatus={true}
      />
      {RenderStreamingMatchView}
    </VirtualizedScrollView>
  );
};
export default CurrentLineUp;

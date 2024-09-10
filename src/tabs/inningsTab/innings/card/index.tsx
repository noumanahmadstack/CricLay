import { FC, useMemo, useState } from 'react';
import { InningScreenProps } from '../../../../modelInterface/scoring';
import TeamIconTitle from '../../../../components/teamIconTitle';
import Roep from '../../../../screens/scoring/normal/score/roep';
import AmateurPlayerScoreboard from '../../../../screens/scoring/amateur/score/playerScoreboard';
import PlayerScoreboard from '../../../../screens/scoring/normal/score/playerScoreboard';
import VirtualizedScrollView from '../../../../components/virtualizedScrollView';
import Timer from '../../../../components/timer';
const Card: FC<InningScreenProps> = ({
  teamNameTitle,
  isSelected,
  overs,
  extras,
  partnership,
  crr,
  rrr,
  inningData,
  strikerId,
  batsmanData,
  bowlersData,
  lineupData,
  isScorecard,
  isDetailed,
  batingTeam,
  matchStatus,
  inningStatus,
  onRefresh,
  isAmateur,
}) => {
  const { duration } = inningData || { duration: null }
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const onHandleRefresh = async () => {
    if (onRefresh) {
      setRefreshing(true)
      await onRefresh()
      setRefreshing(false)
    }
  }
  const RenderTimer = useMemo(() => isDetailed && inningStatus == 'completed' && <Timer isAmateur={isAmateur} duration={duration} isStarted={false} />, [isDetailed, inningStatus])
  return (
    <VirtualizedScrollView
      onRefresh={onHandleRefresh}
      refreshing={refreshing}
    >
      <TeamIconTitle
        name={teamNameTitle}
        isSelected={isSelected}
        logoURL={batingTeam.logoUrl}
      />
      <Roep
        overs={overs}
        extras={extras}
        partnership={partnership}
        crr={crr}
        rrr={rrr}
      />
      {RenderTimer}
      {isAmateur ?
        <AmateurPlayerScoreboard
          currentInning={inningData}
          strikerId={strikerId}
          batsmanData={batsmanData}
          bowlersData={bowlersData}
          lineupData={lineupData}
          isScorecard={isScorecard}
          isDetailed={isDetailed}
          matchStatus={matchStatus}
          inningStatus={inningStatus}
        /> :
        <PlayerScoreboard
          currentInning={inningData}
          strikerId={strikerId}
          batsmanData={batsmanData}
          bowlersData={bowlersData}
          lineupData={lineupData}
          isScorecard={isScorecard}
          isDetailed={isDetailed}
          matchStatus={matchStatus}
          inningStatus={inningStatus}
        />
      }
    </VirtualizedScrollView>
  );
};
export default Card;

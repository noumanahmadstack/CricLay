import { FC, useMemo, useState } from 'react';
import { LeaderBoardPlayers } from '../../../../../modelInterface/player';
import { MatchLeaderboardFilterOptionTypes } from '../../../../../modelInterface/screens/match';
import PlayerStatsWithFilter from '../../../../players/playerStatsWithFilter';

const LeaderBoard: FC<{ matchMvps: LeaderBoardPlayers[] }> = ({ matchMvps }) => {
  const [selectedFilter, setSelectedFilter] = useState<MatchLeaderboardFilterOptionTypes>('all')
  const dropDownData = [
    {
      key: 'all',
      value: "All"
    },
    {
      key: "batingStat",
      value: "Batting"
    },
    {
      key: "bowlingStat",
      value: "Bowling"
    },
    {
      key: "fielderStat",
      value: "Fielding"
    }
  ]
  const data = useMemo(() => matchMvps.map((item) => ({
    id: item.id,
    name: `${item?.name}`,
    teamName: item.team?.name,
    topPerformance:item?.topPerformance,
    t1: 'Batting',
    t2: 'Bowling',
    t3: 'Fielding',
    t4: 'Total',
    d1: item.battingPoints || '0',
    d2: item.bowlingPoints || '0',
    d3: item.fielderPoints || '0',
    d4: item.totalPoints || '0',
  })), [matchMvps]);
  return (
    <PlayerStatsWithFilter
      data={data}
    />
  );
};

export default LeaderBoard;

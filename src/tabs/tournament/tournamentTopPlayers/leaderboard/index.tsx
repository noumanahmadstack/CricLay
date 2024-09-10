import { FC, memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { LeaderBoardPlayersProps, TournamentLeaderboardTypes } from '../../../../modelInterface/tournaments';
import { onLoadMoreTournamentLeaderboard, onMountTournamentLeaderboard } from '../../../../redux/tournaments/getTournament/action';
import { setTournamentLeaderboardCategory } from '../../../../redux/tournaments/getTournament/reducer';
import PlayerStatsWithFilter from '../../../../screens/players/playerStatsWithFilter';

const Leaderboard: FC<{ leaderboard: LeaderBoardPlayersProps, id: string, leaderboardCategory: TournamentLeaderboardTypes }> = ({ leaderboard, id, leaderboardCategory }) => {
    const dispatch = useDispatch();
    const { collection, metadata } = leaderboard;
    const { totalPages, currentPage } = metadata;
    const dropDownData = useMemo(() => [
        {
            key: "batting",
            value: "Batting"
        },
        {
            key: "bowling",
            value: "Bowling"
        },
        {
            key: "fielding",
            value: "Fielding"
        }
    ], []);
    const data = useMemo(() => collection.map((item) => ({
        id: item.id,
        name: `${item.player.name}`,
        teamName: item.team?.name,
        t1: leaderboardCategory === 'fielding' ? 'Catches' : 'R',
        t2: leaderboardCategory === 'fielding' ? 'Run Out' : 'B',
        t3: 'P',
        t4: leaderboardCategory === 'fielding' ? 'Stumps' : 'AVG',
        t5: leaderboardCategory === 'batting' ? 'SR' : leaderboardCategory === 'bowling' ? 'EC' : '',
        t6: leaderboardCategory === 'batting' ? '4`s' : leaderboardCategory === 'bowling' ? 'W' : '',
        t7: leaderboardCategory === 'batting' ? '6`s' : leaderboardCategory === 'bowling' ? 'O`s' : '',
        d1: leaderboardCategory === 'batting' ? (item.batingStat?.runs || '0') : leaderboardCategory === 'bowling' ? (item.bowlingStat?.runs || '0') : (item.fielderStat?.catches || '0'),
        d2: leaderboardCategory === 'batting' ? (item.batingStat?.ballsCount || '0') : (leaderboardCategory === 'bowling' || '0') ? (item.bowlingStat?.ballsCount || '0') : (item.fielderStat?.runOuts || '0'),
        d3: leaderboardCategory === 'batting' ? (item.batingStat?.points || '0') : leaderboardCategory === 'bowling' ? (item.bowlingStat?.points?.toFixed(2) || '0') : (item.fielderStat?.points?.toFixed(2) || '0'),
        d4: leaderboardCategory === 'batting' ? (item.batingStat?.averageRate?.toFixed(2) || '0') : leaderboardCategory === 'bowling' ? (item.bowlingStat?.averageRate?.toFixed(2) || '0') : (item.fielderStat?.stumpings || '0'),
        d5: leaderboardCategory === 'batting' ? (Number(item.batingStat?.strikeRate)?.toFixed(2) || '0') : leaderboardCategory === 'bowling' ? (item.bowlingStat?.economyRate?.toFixed(2) || '0') : '',
        d6: leaderboardCategory === 'batting' ? (item.batingStat?.fours || '0') : leaderboardCategory === 'bowling' ? (item.bowlingStat?.wicketsCount || '0') : '',
        d7: leaderboardCategory === 'batting' ? (item.batingStat?.sixers || '0') : leaderboardCategory === 'bowling' ? (item.bowlingStat?.overs || '0') : '',
    })), [collection, leaderboardCategory]);
    return (
        <PlayerStatsWithFilter
            data={data}
            isLoadingPagination={currentPage < totalPages}
            onLoadMore={() => onLoadMoreTournamentLeaderboard({ id })}
            onRefreshing={() => onMountTournamentLeaderboard({ id })}
            dropDownData={dropDownData}
            filterTitle={leaderboardCategory.toUpperCase()}
            onConfirm={(e) => dispatch(setTournamentLeaderboardCategory(e?.key))}
        />
    )
}

export default memo(Leaderboard);
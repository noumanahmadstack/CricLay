import { FC, memo, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { LeaderBoardPlayersProps, TournamentMVPTypes } from '../../../../modelInterface/tournaments';
import { onLoadMoreTournamentMVP, onMountTournamentMVP } from '../../../../redux/tournaments/getTournament/action';
import { setTournamentMVPCategory } from '../../../../redux/tournaments/getTournament/reducer';
import PlayerStatsWithFilter from '../../../../screens/players/playerStatsWithFilter';

const MVP: FC<{ mvpCategory: TournamentMVPTypes, mvp: LeaderBoardPlayersProps, id: string }> = ({ mvp, id, mvpCategory }) => {
    const dispatch = useDispatch();
    const { collection, metadata } = mvp;
    const { totalPages, currentPage } = metadata;
    const dropDownData = useMemo(() => [
        {
            key: "all",
            value: "All"
        },
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
        t1: 'Batting',
        t2: 'Bowling',
        t3: 'Fielding',
        t4: 'Total',
        d1: item.batingStat?.points?.toFixed(2) || '0',
        d2: item.bowlingStat?.points?.toFixed(2) || '0',
        d3: item.fielderStat?.points?.toFixed(2) || '0',
        d4: item.totalPoints?.toFixed(2) || '0',

    })), [collection]);
    return (
        <PlayerStatsWithFilter
            data={data}
            isLoadingPagination={currentPage < totalPages}
            onLoadMore={() => onLoadMoreTournamentMVP({ id })}
            onRefreshing={() => onMountTournamentMVP({ id })}
            filterTitle={mvpCategory.toUpperCase()}
            dropDownData={dropDownData}
            onConfirm={(e) => dispatch(setTournamentMVPCategory(e?.key))}
        />
    );
};

export default memo(MVP);
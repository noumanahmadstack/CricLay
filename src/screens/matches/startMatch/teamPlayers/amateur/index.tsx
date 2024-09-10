import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PlayerObjProps } from '../../../../../modelInterface/player';
import { BatterStatsAttributesProps, SelectPlayerDataProps } from '../../../../../modelInterface/scoring';
import { updateLineupAction } from '../../../../../redux/scoring/amateur/score/action';
import {
  onEditBatsman,
  onSelectBatter,
  onSelectBowler,
} from '../../../../../redux/scoring/amateur/score/reducer';
import {
  fetchMatchAllPlayers,
  fetchBattingPlaying,
  fetchBowlingPlaying,
  onMountMatchAllPlayers,
  onMountBattingPlaying,
  onMountBowlingPlaying,
  onLoadMoreMatchAllPlayers,
  onAddToBattingPlaying,
  onAddToBowlingPlaying,
  onImpact,
  onSubsitute,
  removeMatchPlayerAction,
} from '../../../../../redux/scoring/normal/teamPlayers/action';
import { setSearchKeywordTab2 } from '../../../../../redux/scoring/normal/teamPlayers/reducer';
import { RootState } from '../../../../../redux/store/store';
import { goBack, navigate } from '../../../../../routes/rootNavigation';
import PlayersTab from '../../../../../tabs/playerTabs';
const AmateurTeamPlayers: FC<any> = ({ route }) => {
  const dispatch = useDispatch();
  const { isBatsman, team_id, match_id, isEdit, selectedBatsmanId } = route.params;
  const {
    isLoading,
    allPlayers,
    metadataForAllPlayers,
    searchKeywordsTab2,
    battingPlaying,
    bowlerPlaying,
  } = useSelector((state: RootState) => state.teamPlayerReducer);
  const { matchDetail } = useSelector((state: RootState) => state.amateurScoreReducer);
  const { currentInning } = matchDetail;
  const { balls, ballsPerOver, id, totalOvers } = currentInning || {};
  const [index, setIndex] = useState<number>(balls.length > 0 ? 0 : 1);
  const routes = [
    { key: 'Tab1', title: 'Playing' },
    { key: 'Tab2', title: 'All Players' },
  ];

  const onHandleSelectPlayer1 = (playerObj: SelectPlayerDataProps) => {
    if (isBatsman) {
      if (isEdit && playerObj.batsmanId) {
        dispatch(onEditBatsman({ batter: playerObj as BatterStatsAttributesProps, selectedBatsmanId }))
      } else {
        dispatch(onSelectBatter({ playerObj, data: battingPlaying }));
      }
    } else {
      dispatch(onSelectBowler({ playerObj, data: bowlerPlaying }));
      updateLineupAction({ inningId: id, bowlerId: playerObj?.bowlerId });
    }
    goBack();
  }

  return (
    <PlayersTab
      routes={routes}
      index={index}
      onSelectPlayer1={onHandleSelectPlayer1}
      onIndexChange={setIndex}
      onMountTab1={() => {
        isBatsman
          ? onMountBattingPlaying({ team_id, match_id })
          : onMountBowlingPlaying({ team_id, match_id });
      }}
      onRefresh1={async () => {
        isBatsman
          ? await fetchBattingPlaying({ team_id, match_id })
          : await fetchBowlingPlaying({ team_id, match_id });
      }}
      onRefresh2={async () =>
        await fetchMatchAllPlayers({ playerMatchId: match_id, id: team_id })
      }
      onMountTab2={() =>
        onMountMatchAllPlayers({ playerMatchId: match_id, id: team_id })
      }
      onLoadMoreTab2={async () =>
        await onLoadMoreMatchAllPlayers({ playerMatchId: match_id, id: team_id })
      }
      onSubmitEditingTab2={() =>
        onMountMatchAllPlayers({ playerMatchId: match_id, id: team_id })
      }
      metadataTab2={metadataForAllPlayers}
      searchKeywordsTab2={searchKeywordsTab2}
      isLoadingTab1={isLoading}
      isLoadingTab2={isLoading}
      isMatchPlaying={true}
      ballsData={balls}
      isBatsman={isBatsman}
      ballsPerOver={ballsPerOver}
      onChangeTextTab2={e => dispatch(setSearchKeywordTab2(e))}
      onPressAddBtn={() => navigate('AddPlayers', { teamId: team_id, isAmateur: true })}
      onLongPressTab1={(e) => onImpact({ teamId: team_id, matchId: match_id, playerId: e.player?.id })}
      onAddSubsituteTab1={(e) => onSubsitute({ teamId: team_id, matchId: match_id, playerId: e.player?.id })}
      onPlayerToAddIntoPlaying={async ({ id }) => {
        isBatsman
          ? await onAddToBattingPlaying({
            team_id,
            match_id,
            players: [id],
            isBatsman,
          })
          : await onAddToBowlingPlaying({
            team_id,
            match_id,
            players: [id],
            isBatsman,
          });
      }}
      dataTab2={allPlayers.filter((item: PlayerObjProps) => !item.isPlayingInMatch)}
      dataTab1={isBatsman ? battingPlaying : bowlerPlaying}
      isAmateur={true}
      totalOvers={totalOvers}
      isDeleteable={!(balls.length > 0)}
      onDelete={({ id }) => id && removeMatchPlayerAction({ match_players: [id], isBatsman })}
    />
  );
};
export default AmateurTeamPlayers;

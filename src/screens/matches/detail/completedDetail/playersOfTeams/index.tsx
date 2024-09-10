import {FC, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {SimpleScreenContainer} from '../../../../../components/screensContainers/screenContainers';
import {InningScreenProps} from '../../../../../modelInterface/scoring';
import {RootState} from '../../../../../redux/store/store';
import InningsTab from '../../../../../tabs/inningsTab';
import {manOfMatch} from '../../../../../redux/matches/startMatch/action';
const PlayingPlayers: FC = () => {
  const {matchDetail} = useSelector(
    (state: RootState) => state.matchDetailsReducer,
  );
  const {innings, id,matchType} = matchDetail;
  const data = useMemo<InningScreenProps[]>(() => {
    return innings.map(inningData => {
      return {
        teamNameTitle:
          inningData?.batingTeam?.name +
          '\n' +
          (inningData?.runs + '/' + inningData?.currentWickets),
        inningNumber: inningData.inningNumber,
        batingTeam:
          inningData.inningNumber == 1
            ? innings.find(item => item.inningNumber === 2)?.batingTeam ??
              inningData.bowlingTeam
            : inningData.bowlingTeam,
        isSelected: true,
        playingPlayers:
          inningData.inningNumber == 1
            ? innings.find(item => item.inningNumber === 2)?.batingTeamPlayers
            : inningData.bowlingTeamPlayers,
        onPressPlayer: data =>
          manOfMatch({playerId: data?.player?.id, matchId: id}),
          isAmateur: matchType == "amateur"
      };
     
    });
  }, [innings, id]);
  return (
    <SimpleScreenContainer isBlue={true}>
      <InningsTab data={data} tabType="playingPlayers"   />
    </SimpleScreenContainer>
  );
};
export default PlayingPlayers;

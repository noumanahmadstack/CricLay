import { FC } from 'react';
import PlayersListView from '../../../../views/players/playersListView';
import { InningScreenProps } from '../../../../modelInterface/scoring';
const Players: FC<InningScreenProps> = ({ playingPlayers, onPressPlayer, onRefresh }) => {
  if (playingPlayers) {
    return (
      <>
        <PlayersListView
          data={playingPlayers}
          onSelectPlayer={onPressPlayer}
          onRefresh={onRefresh}
          isPrivate={true}
        />
      </>
    );
  }
  return null;
};
export default Players;
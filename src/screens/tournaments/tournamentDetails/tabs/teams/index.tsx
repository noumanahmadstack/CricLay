import { FC, useState } from 'react';
import SelectTeam from '../../addTeam';
import { TournamentTeamObjProps } from '../../../../../modelInterface/team';
import FloatingTabBtn from '../../../../../components/floatingAddBtn';
import TeamListView from '../../../../../views/teams/teamListView';

const Teams: FC<{ tournament_id: string; isPrivate?: boolean, data: TournamentTeamObjProps[],tournamentType:string, singlePlayerTab?: boolean}> = ({
  tournament_id,
  isPrivate,
  data,
  tournamentType,
  singlePlayerTab
}) => {
  const [select, setSelect] = useState(false);
  return (
    <>
      <SelectTeam
        isVisible={select}
        onClose={() => setSelect(false)}
        tournament_id={tournament_id}
       tournamentType={tournamentType}
      />
      <TeamListView
        data={data}
        singlePlayerTab={singlePlayerTab}
        tournament_id={tournament_id}
        isPrivate={isPrivate}
      />
      {!isPrivate ?
        <FloatingTabBtn
          onPress={() => setSelect(true)}
          isAmateur={tournamentType === "amateur"}
        />
        : null}
    </>
  );
};
export default Teams;
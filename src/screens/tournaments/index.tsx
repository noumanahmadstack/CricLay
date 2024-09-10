import { FC } from 'react';
import { NavigationProps } from '../../modelInterface/navigation';
import MyTournamentsTabs from '../../tabs/tournament/myTournaments';
const Tournaments: FC<NavigationProps> = ({ navigation }) => {
  return (
    <MyTournamentsTabs
      navigation={navigation}
    />
  );
};
export default Tournaments;
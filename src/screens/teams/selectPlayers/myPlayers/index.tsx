import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormInput from '../../../../components/formInput';
import { SearchIcon } from '../../../../assets/svg';
import styles from './styles';
import PlayersListView from '../../../../views/players/playersListView';
import { RootState } from '../../../../redux/store/store';
import { onMountMyPlayers } from '../../../../redux/players/getPlayer/action';
import SimpleLoader from '../../../../components/loaders/simpleLoader';
const MyPlayers: FC<any> = ({ teamId, route }) => {
  const { myPlayers, isLoading } = useSelector(
    (state: RootState) => state.getPlayerReducer,
  );
  const { id } = route?.params || { id: teamId };
  useEffect(() => {
    onMountMyPlayers(id);
  }, [id]);
  return (
    <>
      <SimpleLoader isLoading={isLoading} />
      <FormInput
        placeholder="Search here..."
        textInputContainerStyle={styles.inputFields}
        LeftChild={<SearchIcon />}
      />
      <PlayersListView data={myPlayers} isPrivate={!!route?.params?.id} />
    </>
  );
};
export default MyPlayers;

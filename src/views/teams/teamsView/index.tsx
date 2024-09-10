import { FC, memo, ReactNode, useCallback, useMemo } from 'react';
import { View, Image, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { LocationIcon } from '../../../assets/svg';
import { onSelectTeam, onSubmits } from '../../../redux/teams/addTeam/action';
import { navigate } from '../../../routes/rootNavigation';
import styles from './styles';
import { TeamViewProps } from '../../../modelInterface/views/teamListView';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { onDeleteTournamentTeamAction } from '../../../redux/tournaments/createTournament/action';
const TeamView: FC<TeamViewProps> = props => {
  const {
    id,
    name,
    players,
    location,
    selectTeam,
    isOnSubmit,
    tournament_id,
    singlePlayerTab,
    logoUrl,
    shareableId,
    disableWholeView,
    isPrivate,
    onPress,
  } = props;
  const onItemPress = useCallback(() => {
    if (onPress) {
      onPress(props);
    } else if (selectTeam) {
      onSelectTeam(props);
      if (!!isOnSubmit && tournament_id) {
        onSubmits({ team_id: id, tournament_id });
      }
    } else {
      navigate('TeamProfile', { logoUrl, id, name, shareableId });
    }
  }, [props]);
  const onPlayerCountPress = useCallback(() => {
    if (singlePlayerTab) {
      navigate('MyPlayers', { id });
    } else {
      navigate('SelectPlayers', props);
    }
  }, [props]);
  const onDeleteTournamentTeam = useCallback(() => {
    onDeleteTournamentTeamAction({ tournament_id, team_id: id, name })
  }, [tournament_id, id, name])

  const RenderDeleteIcon = useMemo<ReactNode>(() => {
    if (!isPrivate) {
      return <FontAwesome5Icon
        name="trash"
        color={'#C7C6C6'}
        size={20}
        style={styles.trashContainer}
        onPress={onDeleteTournamentTeam}
      />
    }
    return null
  }, [isPrivate])
  const teamLogo = useMemo<ImageSourcePropType>(() =>
    logoUrl
      ? { uri: logoUrl }
      : require('../../../assets/images/teams/Icon.jpg')
    , [logoUrl])
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={!!disableWholeView}
      onPress={onItemPress}
      style={styles.container}>
      <View style={styles.primaryContainer}>
        <Image
          style={styles.teamIcon}
          source={teamLogo}
        />
        <View style={styles.titleDescContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
        {RenderDeleteIcon}
      </View>
      <View style={styles.secondaryContainer}>
        <View style={styles.secondaryRowContainer}>
          <LocationIcon />
          <Text style={styles.desc}>{location}</Text>
        </View>
        <Text onPress={onPlayerCountPress} style={styles.playerCount}>
          {players?.metadata?.totalCount} Players
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default memo(TeamView);
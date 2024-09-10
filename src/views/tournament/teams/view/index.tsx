import { FC, memo, useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { navigate } from '../../../../routes/rootNavigation';
import { DeleteGroupTeam } from '../../../../redux/tournaments/createTournament/action';
import { TournamentTeamObjProps } from '../../../../modelInterface/team';

const TournamentTeamsView: FC<{ team: TournamentTeamObjProps, group_id?: string, tournament_id?: string, isPrivate?: boolean }> = ({ team, group_id, tournament_id, isPrivate }) => {
    const onHandleDeleteGroupTeam = useCallback(() => {
        DeleteGroupTeam({ tournament_id, team_id: team?.team?.id, group_id })
    }, [team, group_id, tournament_id])
    return (
        <View
            key={team?.team?.id}
            style={{ ...styles.rowDirection, marginVertical: 10 }}>
            <View style={styles.teamNameImage}>
                <TouchableOpacity
                    disabled={team?.matchesCount !== 0 ? false : true}
                    onPress={() => navigate('PointsDetails', team)}>
                    <Image
                        style={styles.groupTeamImage}
                        source={
                            team?.team?.logoUrl
                                ? { uri: team?.team?.logoUrl }
                                : require('../../../../assets/images/teams/Icon.jpg')
                        }
                    />
                </TouchableOpacity>
                <Text numberOfLines={2} style={styles.groupTeamName}>
                    {team?.team?.name}
                </Text>
            </View>
            <View style={styles.cardTextWrapper}>
                <Text style={styles.scoreText}>
                    {team.matchesCount ? team.matchesCount : '0'}
                </Text>
                <Text style={styles.scoreText}>
                    {team.winningCount ? team.winningCount : '0'}
                </Text>
                <Text style={styles.scoreText}>
                    {team.losingCount ? team.losingCount : '0'}
                </Text>
                <Text style={styles.scoreText}>
                    {team.tieCount ? team.tieCount : '0'}
                </Text>
                <Text style={styles.scoreText}>
                    {team.points ? team.points : '0'}
                </Text>
                <Text style={[styles.scoreText, { width: '35%' }]}>
                    {team.netRunRate ? team.netRunRate : '0.00'}
                </Text>
            </View>
            {!!!isPrivate ? (
                <AntDesign
                    name="delete"
                    color={'#C7C6C6'}
                    size={20}
                    style={styles.trashIcon}
                    onPress={onHandleDeleteGroupTeam}
                />
            ) : null}
        </View>
    )
};
export default memo(TournamentTeamsView);


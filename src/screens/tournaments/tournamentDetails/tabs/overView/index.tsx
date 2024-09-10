import { FC } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
} from 'react-native';
import styles from '../styles';
import { GetTournamentObjectProps } from '../../../../../modelInterface/tournaments';
import colors from '../../../../../theme/colors';
import { FirstRankIcon, LeaderboardIcon, TickIcon, WinningIcon } from '../../../../../assets/svg';

const OverView: FC<{ getTournament: GetTournamentObjectProps }> = ({ getTournament }) => {
    const { stats, winningTeams, topPerformances } = getTournament
    return (
        <SafeAreaView style={styles.safeAriaView}>
            <ScrollView>
                <Text style={styles.topPlayerTitle}>Top Players</Text>
                <View style={styles.topPlayerView}>
                    <View>
                        <Text style={styles.overViewtitle}>Most Runs</Text>
                        <Image style={styles.dp} source={topPerformances?.batter?.player?.avatarUrl ? { uri: topPerformances?.batter?.player?.avatarUrl } : require('../../../../../assets/images/user/user.png')} />
                        <Text style={styles.boundries}>{topPerformances?.batter?.batingStat ? topPerformances?.batter?.batingStat?.runs : 0}</Text>
                        <Text style={styles.playertitle}>{topPerformances?.batter?.player ? topPerformances?.batter?.player?.name : "Player Name"}</Text>
                        <Text style={styles.title}>{topPerformances?.batter?.team ? topPerformances?.batter?.team?.name : "Team Name"}</Text>
                    </View>
                    <View>
                        <Text style={styles.overViewtitle}>Most Wickets</Text>
                        <Image style={styles.dp} source={topPerformances?.bowler?.player?.avatarUrl ? { uri: topPerformances?.bowler?.player?.avatarUrl } : require('../../../../../assets/images/user/user.png')} />
                        <Text style={styles.boundries}>{topPerformances?.bowler?.bowlingStat ? topPerformances?.bowler?.bowlingStat?.wicketsCount : 0}</Text>
                        <Text style={styles.playertitle}>{topPerformances?.bowler?.player?.name ? topPerformances?.bowler?.player?.name : "Player Name"}</Text>
                        <Text style={styles.title}>{topPerformances?.bowler?.team ? topPerformances?.bowler?.team?.name : "Team Name"}</Text>
                    </View>
                </View>
                <Text style={styles.topPlayerTitle}>Tournament Boundaries</Text>
                <View style={styles.topPlayerView}>
                    <View>
                        <Image style={styles.dp} source={require('../../../../../assets/images/tournament/BigSix.png')} />
                        <Text style={styles.boundries}>{stats ? stats?.sixersCount : 0}</Text>
                        <Text style={styles.overViewtitle}>Sixes</Text>

                    </View>
                    <View>
                        <Image style={styles.dp} source={require('../../../../../assets/images/tournament/BigFour.png')} />
                        <Text style={styles.boundries}>{stats ? stats?.foursCount : 0}</Text>
                        <Text style={styles.overViewtitle}>Fours</Text>

                    </View>
                </View>
                {
                    winningTeams?.length > 0  &&
                    <>
                        <Text style={styles.topPlayerTitle}>Tournament Winning Teams</Text>
                        {winningTeams?.map(item => {
                            return (
                                <>
                                    <Text style={[styles.topPlayerTitle, { fontSize: 12 }]}>{item?.name}</Text>
                                    <View style={styles.topPlayerView}>
                                        <View>
                                            <View>
                                            <Image style={styles.teamIcon} source={item?.winningTeam?.logoUrl
                                                ? { uri: item?.winningTeam?.logoUrl }
                                                : require('../../../../../assets/images/teams/Icon.jpg')} />
                                            <WinningIcon style={styles.winningIcon}/>
                                            </View>
                                          
                                            <Text style={[styles.title, { color: colors.darkRed }]}>{item?.winningTeam?.name}</Text>
                                            <Text style={styles.overViewtitle}>(Winner)</Text>
                                        </View>
                                        <View>
                                            <Image style={styles.teamIcon} source={item?.runnerUpTeam?.logoUrl
                                                ? { uri: item?.runnerUpTeam?.logoUrl }
                                                : require('../../../../../assets/images/teams/Icon.jpg')} />
                                            <Text style={[styles.title, { color: colors.darkRed }]}>{item?.runnerUpTeam?.name}</Text>
                                            <Text style={styles.overViewtitle}>(Runner Up)</Text>
                                        </View>
                                    </View>
                                </>
                            );
                        })}
                    </>
                }
            </ScrollView>
        </SafeAreaView>
    )
};
export default OverView;
